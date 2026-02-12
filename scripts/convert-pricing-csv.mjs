import fs from 'fs'
import path from 'path'

const root = path.resolve(process.cwd())
const csvPath = path.join(root, 'Pricing table - Sheet1.csv')
const outPath = path.join(root, 'public', 'features_ulpiano.json')

function tokenizeCsvLine(line) {
  const tokens = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      // toggle unless doubled quote
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      tokens.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  tokens.push(cur)
  return tokens
}

function normalizePlanName(label) {
  const l = (label || '').toLowerCase()
  if (l.includes('free')) return 'free'
  if (l.includes('starter') || l.includes('start')) return 'start'
  if (l.includes('esencial') || l.includes('essential') || l.includes('growth')) return 'essential'
  if (l.includes('pro')) return 'pro'
  if (l.includes('enterprise')) return 'enterprise'
  return null
}

function clean(val) {
  if (val == null) return ''
  return String(val).trim().replace(/^\u200b+|\u200b+$/g, '')
}

function mapCell(value) {
  const v = clean(value)
  if (!v) return null
  const only = v.replace(/\s/g, '')
  if (only === '✓') return true
  if (only === '❌' || only === '—' || only === '-') return false
  return v
}

function isSectionLine(tokens) {
  if (tokens.length === 1) {
    const t = clean(tokens[0])
    if (!t) return false
    const noPunct = t.replace(/[,.;:]/g, '')
    // looks like uppercase section titles
    return /[A-ZÁÉÍÓÚÜÑ\-/ ]{3,}/.test(noPunct) && noPunct === noPunct.toUpperCase()
  }
  return false
}

const text = fs.readFileSync(csvPath, 'utf8')
const lines = text.split(/\r?\n/)

let section = null
let colMap = null // index->planKey mapping, starting after feature column
const rows = []

for (const rawLine of lines) {
  if (!rawLine || !rawLine.trim()) continue
  const tokens0 = tokenizeCsvLine(rawLine)
  // drop leading empties
  let idx = 0
  while (idx < tokens0.length && clean(tokens0[idx]) === '') idx++
  const tokens = tokens0.slice(idx)
  if (tokens.length === 0) continue

  if (isSectionLine(tokens)) {
    section = clean(tokens[0])
    continue
  }

  if (clean(tokens[0]).toLowerCase() === 'funcionalidad') {
    // header row; build column mapping
    colMap = {}
    for (let i = 1; i < tokens.length; i++) {
      const key = normalizePlanName(tokens[i])
      if (key) colMap[i - 1] = key // shift by one because col 0 is feature name
    }
    continue
  }

  if (!colMap) continue // ignore until a header appears

  const featureName = clean(tokens[0])
  if (!featureName) continue

  const row = { section, featureName }
  // Initialize to null to respect empty plans when missing in this header
  const planKeys = ['free','start','essential','pro','enterprise']
  for (const pk of planKeys) row[pk] = null

  for (let i = 1; i < tokens.length; i++) {
    const mapped = colMap[i - 1]
    if (!mapped) continue
    row[mapped] = mapCell(tokens[i])
  }

  rows.push(row)
}

fs.writeFileSync(outPath, JSON.stringify(rows, null, 2), 'utf8')
console.log(`Wrote ${rows.length} rows to ${path.relative(root, outPath)}`)




