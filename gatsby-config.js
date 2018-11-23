module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `testdb`,
        collection: [`myNewCollection2`, 'users']
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
