/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ntmdev.me',
  generateRobotsTxt: true,
  exclude: ['/admin', '/api/*'],
};
