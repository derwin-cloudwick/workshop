/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Amorphic Workshop',
  tagline: 'This workshop enables you to create a fully operational solutions',
  url: 'https://workshop.amorphicdata.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/core/favicon.ico',
  organizationName: 'AmorphicData',
  projectName: 'workshop',
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    image: 'img/core/logo.png',
    navbar: {
      // style: 'primary',
      title: 'Amorphic Workshop',
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo.svg',
      },
      items: [
        {
          to: 'docs/use-cases',
          label: 'Use cases',
          position: 'left',
        },
        {
          to: 'docs/how-to',
          label: 'How-to',
          position: 'left',
        },
        {
          to: 'docs/snippets',
          label: 'Code Snippets',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Use cases',
              to: 'docs/use-cases',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/amorphic',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/showcase/amorphic/posts/?feedView=all',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Amorphic API Docs',
              href: 'https://amorphicdata.readthedocs.io/en/latest/',
            },
            {
              label: 'Amorphic Data',
              href: 'https://amorphicdata.com',
            },
            {
              label: 'Cloudwick Technologies',
              href: 'https://cloudwick.com',
            },
          ],
        },
        {
          title: 'Content Developer',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/AmorphicData/workshop',
            },
            {
              label: 'Creating Docs',
              to: 'docs/how-to/content-developer/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo-white.svg',
        href: 'https://amorphicdata.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Amorphic Workshop, Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'python',
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsLight')
    },
    colorMode: {
      disableSwitch: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/plugin-ideal-image'
  ]
};
