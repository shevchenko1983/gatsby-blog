module.exports = {
  pathPrefix: '/gatsby-blog',
  siteMetadata: {
    title: 'Web Developer Andrey Shevchenko',
    description: 'Creating amazing modern web projects. Individual solution for each project and to each client.',
    content: 'Creating and developing amazing modern web projects. Individual solution for each project and to each client.',
    url: 'https://andrei-shevchenko.com/'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,

      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },

    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'UA-111669662-2',
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        /*defaultDataLayer: { platform: "gatsby" },
         Specify optional GTM environment details.
        gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        dataLayerName: 'YOUR_DATA_LAYER_NAME', */
      },
    },

    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "andrei-shevchenko.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          '**/posts',
          '**/pages',
          '**/media',
          '**/categories',
          '**/taxonomies',
          '**/menus',
          'wp-api-menus/**',
          '**/wp-api-menus/**'
        ],
      },
    },

  ],
};
