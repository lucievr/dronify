module.exports = {
  siteMetadata: {
    title: `Dronify`,
    description: `Dronify - your exclusive seller of high-tech consumer, professional, and enterprise drones all around Europe.`,
    url: "https://dronify.netlify.com",
    image: "/src/images/poster.jpg",
    author: `@lucie_vrs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://lucie:6snYknGZrjvnSX5@dronify-9s7j9.mongodb.net`,
        dbName: `Dronify`,
        collection: [`drones`, `users`],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'mongodbDronifyDrones',
        imagePath: 'imageURL1',
        name: `localImage1`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'mongodbDronifyDrones',
        imagePath: 'imageURL2',
        name: `localImage2`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'mongodbDronifyDrones',
        imagePath: 'imageURL3',
        name: `localImage3`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'mongodbDronifyDrones',
        imagePath: 'imageURL4',
        name: `localImage4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dronify`,
        short_name: `Dronify`,
        start_url: `/`,
        background_color: `#78848f`,
        theme_color: `#3a4045`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          'Link: </icons/icon-48x48.png>; rel=preload; as=image',
          'Link: </icons/icon-72x72.png>; rel=preload; as=image',
          'Link: </icons/icon-96x96.png>; rel=preload; as=image',
          'Link: </icons/icon-144x144.png>; rel=preload; as=image',
        ],
      },
    },
    `gatsby-plugin-sass`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
