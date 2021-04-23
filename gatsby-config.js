module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-code-notes',
    description: `A starter for gatsby-theme-code-notes`,
    author: 'Zander',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
        showDate: true,
        // gitRepoContentPath: 'https://github.com/mrmartineau/gatsby-starter-code-notes/tree/master/notes',
        // openSearch: {
        //   siteShortName: `My Code Notes`,
        //   siteUrl: 'https://my-website.com',
        //   siteTags: 'code',
        //   siteContact: 'https://twitter.com/???',
        //   siteDescription:
        //     'Code Notes',
        // },
      },
    },
  ],
}
