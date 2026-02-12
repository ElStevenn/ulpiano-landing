/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ulpiano.es',
  generateRobotsTxt: true,
  sitemapSize: 5000,
};


