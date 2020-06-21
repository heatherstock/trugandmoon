module.exports = {
  siteMetadata: {
    title: `Trug & Moon`,
    description: `Know thyself and thou shalt know the Universe and God.`,
    author: `@trugandmoon`,
    menuLinks:[
      {
        name:'About',
        link:'/about'
      },
      // {
      //   name:'Yoga',
      //   link:'/yoga'
      //  }, 
       {
         name: 'Blog',
         link: '/blog'
       }
      ]
  },
  pathPrefix: "/trugandmoon",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
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
