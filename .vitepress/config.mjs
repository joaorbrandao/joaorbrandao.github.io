import { defineConfig } from 'vitepress'

/************************************************
 * 
 * NAVBAR CONFIG
 * 
 ************************************************/
const navbarConfig = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Posts', link: '/posts/' },
  { text: 'Sharing is Caring', link: '/sharing-is-caring/' },
];

/************************************************
 * 
 * SIDEBAR CONFIG
 * 
 ************************************************/
const sidebarPostsConfig = {
  '/posts/': [
    {
      text: 'Posts',
      items: [
        { text: 'Architecture Decision Making', link: '/posts/architecture-decision-making' },
        { text: 'Moved My Notes to Git, and I like it!', link: '/posts/moved-my-notes-to-git' },
        { text: 'Happy Teams with Coding Dojos', link: '/posts/happy-teams-with-coding-dojos' },
        { text: 'Given, When, Then', link: '/posts/given-when-then' },
      ],
    },
  ],
};
const sidebarSharingIsCaringConfig = {
  '/sharing-is-caring/': [
    {
      text: 'Architecture',
      items: [
        { text: 'Architecture Decision-Making Framework', link: '/sharing-is-caring/architecture/architecture-decision-making-framework' },
        { text: 'ADR Template', link: '/sharing-is-caring/architecture/adr-template' },
      ],
    },
    {
      text: 'Technology Strategy',
      items: [
        { text: 'Build vs Buy vs Borrow Framework', link: '/sharing-is-caring/technology-strategy/build-vs-buy-vs-borrow-framework' },
        { text: 'Tech Radar Playbook', link: '/sharing-is-caring/technology-strategy/tech-radar-playbook' },
        { text: 'Technical Debt Management Framework', link: '/sharing-is-caring/technology-strategy/technical-debt-management-framework' },
        { text: 'Migration Strategy Playbook', link: '/sharing-is-caring/technology-strategy/migration-strategy-playbook' },
      ]
    },
  ],
};
const sidebarConfig = {
  ...sidebarPostsConfig,
  ...sidebarSharingIsCaringConfig,
};

/************************************************
 * 
 * SOCIAL LINKS
 * 
 ************************************************/
const socialLinksConfig = [
  { icon: 'github', link: 'https://github.com/joaorbrandao' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/joaorbrandao/' },
];

/************************************************
 * 
 * CONFIG
 * 
 ************************************************/
export default defineConfig({
  title: 'João Brandão',
  description: 'Senior Software Engineer exploring tech',
  cleanUrls: true,
  srcExclude: ['README.md'],

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: navbarConfig,

    sidebar: sidebarConfig,

    socialLinks: socialLinksConfig,
  },
})
