module.exports = {
  siteMetadata: {
    title: `Trug &\u00a0Moon`,
    description: `Know thyself and thou shalt know the Universe and God.`,
    author: `@trugandmoon`,
    menuLinks:[
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Archive',
        link:'/archive'
      },
      // {
      //   name:'Journal',
      //   link:'/journal'
      // }
      ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              markdownCaptions: true,
              wrapperStyle: 'font-size: 16px; text-align: center; font-style: italic;',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles/summer2020`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles/winter2020-21`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `trugandmoon`,
        short_name: `trugandmoon`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
