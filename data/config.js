const config = {
    siteTitle: 'Kareem Arab',
    siteTitleShort: 'kareem',
    siteTitleAlt: '@me',
    // siteLogo: '/src/images/logo.png',
    siteUrl: 'https://www.kareemarab.com',
    repo: 'https://github.com/kareemarab/kareemarab',
    pathPrefix: '',
    dateFromFormat: 'YYYY-MM-DD',
    dateFormat: 'MMMM Do, YYYY',
    siteDescription:
      'kareem\'s apprehension :(',
    siteRss: '/rss.xml',
    googleAnalyticsID: '',
    postDefaultCategoryID: 'personal',
    newsletter: '',
    newsletterEmbed: '',
    userName: 'kareemarab',
    userEmail: 'me@kareemarab.com',
    userTwitter: 'itskareemarab',
    menuLinks: [
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'thoughts',
        link: '/thoughts',
      },
      {
        name: 'ml',
        link: '/ml',
      },
      {
        name: 'projects',
        link: '',
      },
      {
        name: 'bookshelf',
        link: '/bookshelf',
      },
      {
        name: 'film',
        link: '',
      },
      {
        name: 'music',
        link: '',
      },
      {
        name: 'resume',
        link: '/resume.pdf',
      }
    ],
    themeColor: '#3F80FF',
    backgroundColor: '#ffffff',
  }

  // Make sure pathPrefix is empty if not needed
  if (config.pathPrefix === '/') {
    config.pathPrefix = ''
  } else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
  }

  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

  module.exports = config