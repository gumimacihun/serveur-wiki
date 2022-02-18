// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Serveur Wiki',
        logo: {
          alt: 'Serveur',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Reglement/definitionrp',
            position: 'left',
            label: 'Reglement',
          },
          {
            type: 'doc',
            docId: 'Reglement/sanctions',
            position: 'left',
            label: 'WhiteList',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Reglement',
                to: '/docs/Reglementation/definitonrp',
              },
              {
                label: 'White List',
                to: '/docs/White%20List/wl',
              },
            ],
          },
          {
            title: 'Resaux',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/?lang=fr',
              },
              {
                label: 'Top Serveur',
                href: 'https://top-serveurs.net',
              },
            ],
          },
          {
            title: 'Autres',
            items: [
              {
                label: 'Donation',
                href: 'https://www.paypal.com/fr/home',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serveur, fait avec ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
