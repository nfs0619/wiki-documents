// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Wrap the entire config in an async IIFE
module.exports = (async () => {
  // Dynamically import ESM modules
  const remarkMath = (await import('remark-math')).default;
  const rehypeKatex = (await import('rehype-katex')).default;

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Seeed Studio Wiki',
    tagline:
      'The Seeed Studio Files Management Platform, Opening up and Cooperation.',

    url: 'https://wiki.seeedstudio.com',
    baseUrl: '/',
    // onBrokenLinks: 'throw',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/S.png',
    themes: ['docusaurus-theme-search-typesense'],
    scripts: [
      // String format.
      // 'https://viewer.altium.com/client/static/js/embed.js',

      // Object format.
      {
        src: 'https://viewer.altium.com/client/static/js/embed.js',
        async: true,
      },
      {
        src: '/js/custom.js', // 添加你的 JavaScript 文件名、
        async: true,
      },
      {
      src: '/js/language-switcher.js',
      async: true,
      },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Seeed-Studio', // Usually your GitHub org/user name.
    projectName: 'wiki-documents', // Usually your repo name.
    trailingSlash: true,
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
      path: 'i18n',
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
          calendar: 'gregory',
          path: 'en',
        },
      },
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),

            // Use the resolved plugins directly as an array
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],

            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editLocalizedFiles: false,
            editCurrentVersion: false,

            beforeDefaultRemarkPlugins: [],
            beforeDefaultRehypePlugins: [],

            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            disableVersioning: false,
            includeCurrentVersion: true,
            lastVersion: undefined,

            include: ['**/*.md', '**/*.mdx'],
            exclude: [
              '**/_*.{js,jsx,ts,tsx,md,mdx}',
              '**/_*/**',
              '**/*.test.{js,jsx,ts,tsx}',
              '**/__tests__/**',
            ],

            editUrl:
              'https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/',
          },

          googleTagManager: {
            containerId: 'GTM-M4JG2HVB',
          },

          //         blog: {
          //           showReadingTime: true,
          //           // Please change this to your repo.
          //           // Remove this to remove the "edit this page" links.
          //           editUrl:
          //             'https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/',
          //         },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    plugins: [
      // [
      //   '@docusaurus/plugin-pwa',
      //   {
      //     debug: true,
      //     offlineModeActivationStrategies: [
      //       'appInstalled',
      //       'standalone',
      //       'queryString',
      //     ],
      //     pwaHead: [
      //       {
      //         tagName: 'link',
      //         rel: 'icon',
      //         href: '/img/S.png',
      //       },
      //       {
      //         tagName: 'link',
      //         rel: 'manifest',
      //         href: '/manifest.json', // your PWA manifest
      //       },
      //       {
      //         tagName: 'meta',
      //         name: 'theme-color',
      //         content: 'rgb(37, 194, 160)',
      //       },
      //     ],
      //   },
      // ],
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        zoom: {
          selector: '.markdown :not(em) > img',
          background: {
            dark: 'rgb(50, 50, 50)',
            light: 'rgb(255, 255, 255)',
          },

          // zoom: { // This seems to be a duplicate key "zoom", perhaps meant for medium-zoom options?
          //   selector: '.markdown :not(a) > img', // Exclude images inside links
          // },
          // The options for docusaurus-plugin-image-zoom are usually directly under the plugin's key in themeConfig, not nested again under "zoom"
          // Check the plugin's documentation. If the inner zoom is for medium-zoom options, it should be under 'config'
          config: { // This is the correct place for medium-zoom options
            // selector: '.markdown :not(a) > img', // If you want to override default selector for zoom behavior
          },
        },

        colorMode: {
          defaultMode: 'dark',
          // disableSwitch: true,
        },

        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 5,
        },

        giscus: {
          repo: 'Seeed-Studio/wiki-documents',
          repoId: 'MDEwOlJlcG9zaXRvcnkzMDM5NTk0Nzk=',
          category: 'Q&A',
          categoryId: 'DIC_kwDOEh4Nt84CTIbM',
          theme: 'light_high_contrast',
          darkTheme: 'dark_tritanopia',
        },

        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },

        navbar: {
          // title: 'My Site',
          logo: {
            alt: 'Seeed Studio',
            src:
              'https://files.seeedstudio.com/wiki/wiki-platform/SeeedStudio.png',
            srcDark:
              'https://files.seeedstudio.com/wiki/wiki-platform/seeed_white_logo.png',
            href: '/',
            className: 'navbar_logo_items',
          },
          items: [
            {
              label: 'Quick Links',
              to: '/Getting_Started',
              position: 'left',
              className: 'navbar_dorp_items js_getting_started',
              items: [
                {
                  label: 'Sensor and Sensing',
                  to: 'Sensor_Network',
                },
                {
                  label: 'Networking',
                  to: 'Network',
                },
                {
                  label: 'Edge Computing',
                  to: 'Edge_Computing',
                },
                {
                  label: 'Cloud',
                  to: 'Cloud',
                },
              ],
            },
            {
              label: 'Explore with Topics',
              to: '/topicintroduction',
              position: 'left',
              className: 'navbar_dorp_items js_explore_learn',
              items: [
                {
                  label: 'TinyML',
                  to: '/tinyml_topic',
                },
                {
                  label: 'SenseCraft Model Assistant',
                  to: '/ModelAssistant_Introduce_Overview',
                },
                {
                  label: 'Home Assistant',
                  to: '/home_assistant_topic',
                },
                {
                  label: 'Open Source',
                  to: '/open_source_topic',
                },
                {
                  label: 'Edge AI',
                  to: '/edge_ai_topic',
                },
                {
                  label: 'Wiki 矽递科技 (中文)',
                  to: '/cn/Getting_Started',
                },
                {
                  label: 'Wiki SeeedStudio (日本語)',
                  to: '/ja/Getting_Started',
                },
                {
                  label: 'Wiki SeeedStudio (Español)',
                  to: '/es/SeeedStudio_XIAO_Series_Introduction',
                },
              ],
            },
            {
              type: 'dropdown',
              label: 'FAQs',
              to: '/knowledgebase',
              position: 'left',
              className: 'navbar_dorp_items',
              items: [
                {
                  label: 'NVIDIA Jetson Series',
                  to: '/Jetson_FAQ',
                },
                {
                  label: 'Seeed Studio XIAO Series',
                  to: '/XIAO_FAQ',
                },
                {
                  label: 'reComputer R1000 Series',
                  to: '/reComputer_R1000_FAQ',
                },
                {
                  label: 'reTerminal',
                  to: '/reTerminal-new_FAQ',
                },
                {
                  label: 'reRouter',
                  to: '/FAQs_For_openWrt',
                },
                {
                  label: 'Odyssey',
                  to: '/ODYSSEY_FAQ',
                },
                {
                  label: 'Wio Terminal',
                  to: '/wio_terminal_faq',
                },
                {
                  type: 'html',
                  value: '<hr style="margin: 8px 0;">',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.com/invite/eWkprNDMU7',
                },
                {
                  label: 'Email',
                  href: 'https://www.seeedstudio.com/contacts',
                },
                {
                  label: 'Forum',
                  href: 'https://forum.seeedstudio.com/',
                },
                {
                  label: 'Have Suggestions?',
                  href:
                    'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
                },
              ],
            },
            {
              type: 'dropdown',
              label: 'Get Involved',
              to: '/ranger',
              position: 'left',
              className: 'navbar_dorp_items',
              items: [
                {
                  label: 'Affiliate & Creator',
                  to: 'https://www.seeedstudio.com/blog/affiliate-program/',
                },
                {
                  label: 'Rangers',
                  to: '/ranger',
                },
                {
                  label: 'Contributors',
                  to: '/contributors',
                },
                {
                  label: 'Apply for Rangers',
                  href:
                    'https://docs.google.com/forms/d/e/1FAIpQLSdiAWHmRJqgVNTJyJDkzhufc1dygFyhWFyEtUTm-mrgSKaEgg/viewform',
                },
                {
                  label: 'Direct to Assignments',
                  href: 'https://github.com/orgs/Seeed-Studio/projects/6',
                },
                {
                  label: 'More about Rangers',
                  href:
                    'https://www.seeedstudio.com/blog/2023/09/15/join-the-seeed-ranger-program-empowering-developers-and-building-communities/',
                },
                {
                  label: 'More about Contributors',
                  href: 'https://wiki.seeedstudio.com/Contributor',
                },
              ],
            },
            {
              to: 'https://www.seeedstudio.com/',
              label: 'Bazaar 🛍️',
              position: 'right',
              className: 'navbar_doc_right_items',
            },
            {
              to: 'https://sensecraft.seeed.cc/ai/#/home',
              label: 'SenseCraft AI',
              position: 'right',
              className: 'navbar_doc_right_items',
            },
            {
              href: 'https://sensecraft.seeed.cc/ai/#/home',
              position: 'right',
              className: 'header-SSCMA',
            },
            {
              href: 'https://github.com/Seeed-Studio/wiki-documents',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },

        footer: {
          style: 'dark',
          links: [
            {
              title: 'Navigation',
              items: [
                {
                  label: 'Getting Started',
                  to: '/Getting_Started',
                },
                {
                  label: 'Sensor and Sensing',
                  to: '/Sensor_Network',
                },
                {
                  label: 'Network',
                  to: '/Network',
                },
                {
                  label: 'Edge Computing',
                  to: '/Edge_Computing',
                },
                {
                  label: 'Cloud',
                  to: '/Cloud',
                },
                {
                  label: 'Solutions',
                  to: '/Solutions',
                },
              ],
            },
            {
              title: 'Ecosystem',
              items: [
                {
                  label: 'Discord',
                  to: 'https://discord.com/invite/QqMgVwHT3X',
                },
                {
                  label: 'Project Hub',
                  to: 'https://project.seeedstudio.com/',
                },
                {
                  label: 'Partners',
                  to: 'https://www.seeedstudio.com/ecosystem/',
                },
                {
                  label: 'Distributors',
                  to: 'https://www.seeedstudio.com/distributors.html',
                },
              ],
            },
            {
              title: 'Quick Guide',
              items: [
                {
                  label: 'Bazaar',
                  to: 'https://www.seeedstudio.com/',
                },
                {
                  label: 'How to get help',
                  to: 'https://www.seeedstudio.com/get_help/HowToGetHelp',
                },
                {
                  label: 'FAQs',
                  to: 'https://support.seeedstudio.com/knowledgebase',
                },
                {
                  label: 'Forum',
                  to: 'https://forum.seeedstudio.com/',
                },
                {
                  label: 'Technical Support',
                  to: 'https://www.seeedstudio.com/get_help/TechnicalSupport',
                },
              ],
            },
            {
              title: 'Company',
              items: [
                {
                  label: 'About Seeed',
                  to: 'https://www.seeedstudio.com/about-us/',
                },
                {
                  label: 'Join us',
                  to: 'https://www.seeedstudio.com/join-us/',
                },
                {
                  label: 'Contact Us',
                  to: 'https://www.seeedstudio.com/contacts',
                },
                {
                  label: 'Press',
                  to:
                    'https://www.seeedstudio.com/blog/2020/04/22/seeed-in-the-news/',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Seeed Studio, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        typesense: {
          typesenseCollectionName: 'wiki_platform_test_1743938099',
          typesenseServerConfig: {
            nodes: [
              {
                host: 'search.seeedstudio.com',
                protocol: 'https',
              },
            ],
            apiKey: 'eCZrVYUXCKtGb3DTiSm5JkZSxhPUUPMH',
          },
          typesenseSearchParameters: {
            query_by: 'hierarchy.lvl0,hierarchy.lvl2,content,sku',
          },
          transformSearchParameters: (inputString, searchParameters) => {
            if (/^\d{5,}$/.test(inputString)) {
              console.log('检测到 SKU 搜索:', inputString);
              return {
                ...searchParameters,
                query_by: 'sku',
                query: inputString,
                filter_by: 'doc_type:=gettingstarted && !doc_type:=project',
              };
            }
            return searchParameters;
          },
          contextualSearch: true,
        },
        announcementBar: {
          id: 'support_us',
          content:
            'Collaborate with Seeed — <a target="_blank" href="https://www.seeedstudio.com/blog/affiliate-program/">Creator</a>, <a target="_blank" href="https://wiki.seeedstudio.com/ranger/">Ranger</a>, or <a target="_blank" href="https://wiki.seeedstudio.com/contributors/">Contributor</a>, there’s always a role ideal for you!',
          backgroundColor: '#013949',
          textColor: '#FFFFFF',
          isCloseable: false,
        },
      }),
  };

  return config; // Return the config object from the IIFE
})();