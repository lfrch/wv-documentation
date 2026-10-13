/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wv-dokumentation',
  tagline: 'Dokumentation eines empirischen Projekts',
  url: 'https://lfrch.github.io',
  baseUrl: '/wv-documentation/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lfrch',
  projectName: 'wv-documentation',
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Dokumentation - Wissenschaftliche Vertiefung',
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Referentin',
          items: [
            {
              html: 'Lea Frech | lea.frech@student.reutlingen-university.de | Human-centered computing | Hochschule Reutlingen'
            },
          ],
        },
      ],
    },
  },
};

module.exports = config;