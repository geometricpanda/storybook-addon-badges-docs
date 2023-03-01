// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Badges',
  tagline: 'Another Storybook Addon',
  favicon: 'img/badges-icon.png',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'geometricpanda', // Usually your GitHub org/user name.
  projectName: 'storybook-addon-badges', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Storybook Addon Badges',
        logo: {
          alt: 'Storybook Addon Badges Logo',
          src: 'img/badges-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            label: 'Github',
            href: 'https://github.com/geometricpanda/storybook-addon-badges',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Advanced',
                to: '/docs/category/advanced',
              },
              {
                label: 'Tips',
                to: '/docs/category/tips',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/@geometricpanda/storybook-addon-badges',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/geometricpanda/storybook-addon-docs',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/jim_drury',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/geometricjim',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jim-drury/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} James Drury.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
