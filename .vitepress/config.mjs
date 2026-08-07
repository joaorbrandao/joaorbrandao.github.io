import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'João Brandão',
  description: 'Senior Software Engineer exploring tech',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Posts', link: '/posts/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: 'Happy Teams with Coding Dojos', link: '/posts/happy-teams-with-coding-dojos' },
            { text: 'Given, When, Then', link: '/posts/given-when-then' }
        ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joaorbrandao' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/joaorbrandao/' },
    ],
  },
})
