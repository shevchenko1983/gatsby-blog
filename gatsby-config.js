module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
