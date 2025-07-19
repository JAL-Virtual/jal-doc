import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JAL Virtual Documentation',
  tagline: 'Your guide to JAL Virtual’s systems and workflows',
  favicon: 'img/favicon.ico',

  future: { v4: true },
  url: 'https://doc.jalvirtual.com',
  baseUrl: '/',
  organizationName: 'Virtual Airline',
  projectName: 'jalv-doc',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/staff-team.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',               // Default to dark mode
      disableSwitch: false,              // User can toggle between light/dark
      respectPrefersColorScheme: true,   // Respect system preference
    },

    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      style: 'dark',
      logo: {
        alt: 'JAL Virtual Logo',
        src: 'img/docusaurus.png',    
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://jalvirtual.com/home/',
          label: 'JAL Virtual Website',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright:
        'Copyright © 2025, JALv Documentation Create by JAL1977 Y. Zhong Jie',
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
