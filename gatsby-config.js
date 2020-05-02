module.exports = {
  siteMetadata: {
    title: `Andrea Zerbinati`,
    name: `Andrea Zerbinati`,
    siteUrl: `https://andreazerbinati.com`,
    description: `A blog about CS`,
    hero: {
      heading: `A Computer Science Workbench`,
      maxWidth: 700,
    },
  social: [
      {
        name: `twitter`,
        url: `https://twitter.com/AndreaZ11`,
      },
      {
        name: `github`,
        url: `https://github.com/andreazerbinati`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/andreazerbinati/`,
      },
  ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
