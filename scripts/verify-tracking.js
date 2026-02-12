#!/usr/bin/env node

/**
 * Script de verificación del sistema de tracking
 * Verifica que todos los componentes necesarios estén en su lugar
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'lib/tracking.ts',
  'lib/tracking.types.ts',
  'lib/hooks/useLandingTracking.ts',
  'components/site/AnalyticsProvider.tsx',
  '.env.example',
];

const REQUIRED_DOCS = [
  'docs/TRACKING.md',
  'docs/TRACKING_EXAMPLES.md',
  'docs/TRACKING_RESUMEN.md',
];

const INSTRUMENTED_COMPONENTS = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/precios/page.tsx',
  'components/sections/PlanCard.tsx',
  'components/sections/PricingCardsScreenshot.tsx',
  'components/sections/PricingHero.tsx',
  'components/HeroCTA.tsx',
];

function checkFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.existsSync(fullPath);
}

function checkEnvVariable() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) {
    return { exists: false, configured: false };
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasGTMId = envContent.includes('NEXT_PUBLIC_GTM_ID=GTM-');
  
  return { exists: true, configured: hasGTMId };
}

function main() {
  console.log('🔍 Verificando Sistema de Tracking GTM\n');
  
  let allGood = true;
  
  // Verificar archivos core
  console.log('📦 Archivos Core:');
  REQUIRED_FILES.forEach(file => {
    const exists = checkFile(file);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file}`);
    if (!exists) allGood = false;
  });
  
  console.log('\n📚 Documentación:');
  REQUIRED_DOCS.forEach(file => {
    const exists = checkFile(file);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file}`);
    if (!exists) allGood = false;
  });
  
  console.log('\n🔧 Componentes Instrumentados:');
  INSTRUMENTED_COMPONENTS.forEach(file => {
    const exists = checkFile(file);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file}`);
    if (!exists) allGood = false;
  });
  
  // Verificar variable de entorno
  console.log('\n⚙️  Configuración:');
  const env = checkEnvVariable();
  
  if (!env.exists) {
    console.log('  ⚠️  .env.local no existe');
    console.log('     Crea el archivo y agrega: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX');
    allGood = false;
  } else if (!env.configured) {
    console.log('  ⚠️  .env.local existe pero NEXT_PUBLIC_GTM_ID no está configurado');
    console.log('     Agrega: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX');
    allGood = false;
  } else {
    console.log('  ✅ NEXT_PUBLIC_GTM_ID configurado en .env.local');
  }
  
  // Resumen
  console.log('\n' + '='.repeat(50));
  if (allGood) {
    console.log('✅ Sistema de tracking completamente configurado');
    console.log('\n📖 Próximos pasos:');
    console.log('   1. Verifica que NEXT_PUBLIC_GTM_ID tenga tu ID real de GTM');
    console.log('   2. Ejecuta npm run dev');
    console.log('   3. Abre la consola del navegador');
    console.log('   4. Navega por la landing y verifica los logs [Tracking]');
    console.log('\n📚 Documentación: docs/TRACKING.md');
    process.exit(0);
  } else {
    console.log('❌ Faltan archivos o configuración');
    console.log('\n🔧 Acciones requeridas:');
    console.log('   - Verifica que todos los archivos existan');
    console.log('   - Configura .env.local con tu GTM ID');
    console.log('\n📚 Consulta: docs/TRACKING_RESUMEN.md');
    process.exit(1);
  }
}

main();
