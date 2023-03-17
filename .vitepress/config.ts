import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

// @ts-ignore
export default defineConfig({
  base: '/docs-en/',
  title: 'Laravel-Admin Documentation',
  description: 'a tool to quickly build back office management',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: 'English' },
    cn1: { label: '简体中文（GitHub）', link: 'https://elegant-admin.github.io/docs-cn/' },
    cn2: { label: '简体中文（码云）', link: 'http://elegant-admin.gitee.io/docs-cn/' },
  },

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      pattern: 'https://github.com/elegant-admin/docs-en/edit/main/:path',
      text: 'suggest modifications to this page',
    },

    outline: {
      label: 'table of contents on this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z-song/laravel-admin' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'laravel-admin',
      searchParameters: {
        facetFilters: ['tags:en']
      },
      placeholder: 'search for documents',
      translations: {
        button: {
          buttonText: 'search'
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'clear the query criteria',
            resetButtonAriaLabel: 'clear the query criteria',
            cancelButtonText: 'cancel',
            cancelButtonAriaLabel: 'cancel'
          },
          startScreen: {
            recentSearchesTitle: 'search history',
            noRecentSearchesText: 'no search history',
            saveRecentSearchButtonTitle: 'save to search history',
            removeRecentSearchButtonTitle: 'remove from search history',
            favoriteSearchesTitle: 'collection',
            removeFavoriteSearchButtonTitle: 'remove from collection'
          },
          errorScreen: {
            titleText: 'unable to get results',
            helpText: 'you may need to check your network connection'
          },
          footer: {
            selectText: 'choose',
            navigateText: 'handoff',
            closeText: 'shut down',
            searchByText: 'search for a vendor'
          },
          noResultsScreen: {
            noResultsText: 'unable to find results',
            suggestedQueryText: 'you can try querying',
            reportMissingResultsText: 'do you think this query should have results?',
            reportMissingResultsLinkText: 'give us feedback'
          }
        }
      },
    },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      copyright:
        'The content of this document is copyrighted by laravel-admin, all rights reserved'
    },

    nav: [
      { text: 'documentation', link: '/guide/', activeMatch: '/guide/' },
      { text: 'plugins', link: 'https://github.com/laravel-admin-extensions' },
      { text: 'team', link: '/team/', activeMatch: '/team/' },
      { text: 'development logs', link: 'https://github.com/z-song/laravel-admin/releases' },
      {
        text: 'Version',
        items: [
          {
            text: 'v1 documentation',
            link: '/'
          },
          {
            text: 'v2 documentation',
            link: '/'
          },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'guide',
          items: [
            {
              text: 'Overview',
              link: '/guide/'
            },
          ]
        },
        {
          text: 'Getting started',
          collapsed: true,
          items: [
            {
              text: 'Install',
              link: '/guide/install'
            },
            {
              text: 'Quick start',
              link: '/guide/quick-start',
            },
            {
              text: 'Configuration',
              link: '/guide/configuration',
            },
            {
              text: 'Upgrading',
              link: '/guide/upgrading'
            },
            {
              text: 'Page content & Layout',
              link: '/guide/content-layout'
            }
          ]
        },
        {
          text: 'Model grid',
          collapsed: true,
          items: [
            {
              text: 'Basic usage',
              link: '/guide/model-grid'
            },
            {
              text: 'Column usage',
              link: '/guide/model-grid-column'
            },
            {
              text: 'Column display',
              link: '/guide/model-grid-column-display'
            },
            {
              text: 'Filters',
              link: '/guide/model-grid-filters'
            },
            {
              text: 'Column filter',
              link: '/guide/model-grid-column-filter'
            },
            {
              text: 'Inline edit',
              link: '/guide/model-grid-inline-edit'
            },
            {
              text: 'Row actions',
              link: '/guide/model-grid-actions'
            },
            {
              text: 'Custom row & batch actions',
              link: '/guide/model-grid-custom-actions'
            },
            {
              text: 'Data export',
              link: '/guide/model-grid-export'
            },
            {
              text: 'Header & Footer',
              link: '/guide/model-grid-header-footer'
            },
            {
              text: 'Grid Initialization',
              link: '/guide/model-grid-init'
            },
            {
              text: 'Total row',
              link: '/guide/model-grid-total-row'
            },
            {
              text: 'Quick search',
              link: '/guide/model-grid-quick-search'
            },
            {
              text: 'Spec selector',
              link: '/guide/model-grid-spec-selector'
            },
            {
              text: 'Quick create',
              link: '/guide/model-grid-quick-create'
            },
            {
              text: 'Custom tools',
              link: '/guide/model-grid-custom-tools'
            },
            {
              text: 'External data',
              link: '/guide/model-grid-data'
            },
            {
              text: 'Hot keys',
              link: '/guide/model-grid-hotkeys'
            },
            {
              text: 'Soft Deleting',
              link: '/guide/model-grid-soft-deletes'
            }
          ]
        },
        {
          text: 'Model form',
          collapsed: true,
          items: [
            {
              text: 'Basic usage',
              link: '/guide/model-form'
            },
            {
              text: 'Form fields',
              link: '/guide/model-form-fields',
            },
            {
              text: 'Image/File upload',
              link: '/guide/model-form-upload',
            },
            {
              text: 'JSON fields',
              link: '/guide/model-form-json-fields'
            },
            {
              text: 'Relationship',
              link: '/guide/model-form-relationships'
            },
            {
              text: 'Form linkage',
              link: '/guide/model-form-linkage'
            },
            {
              text: 'Form field management',
              link: '/guide/model-form-field-management'
            },
            {
              text: 'Form validation',
              link: '/guide/model-form-validation'
            },
            {
              text: 'Form callback',
              link: '/guide/model-form-callback'
            },
            {
              text: 'Form Initialization',
              link: '/guide/model-form-init'
            },
            {
              text: 'Form layout',
              link: '/guide/model-form-layout'
            }
          ]
        },
        {
          text: 'Model show',
          collapsed: true,
          items: [
            {
              text: 'Basic usage',
              link: '/guide/model-show'
            },
            {
              text: 'Fields',
              link: '/guide/model-show-fields',
            },
            {
              text: 'Relationship',
              link: '/guide/model-show-relationship',
            },
            {
              text: 'Extension',
              link: '/guide/model-show-extension'
            }
          ]
        },
        {
          text: 'Model tree',
          link: '/guide/model-tree'
        },
        {
          text: 'Data form',
          link: '/guide/data-form'
        },
        {
          text: 'language localization',
          link: '/guide/localization'
        },
        {
          text: 'CSS/JavaScript',
          link: '/guide/frontend'
        },
        {
          text: 'Console commands',
          link: '/guide/commands'
        },
        {
          text: 'Content message',
          link: '/guide/content-message'
        },
        {
          text: 'Widgets',
          link: '/guide/widgets'
        },
        {
          text: 'Permissions',
          link: '/guide/permission'
        },
        {
          text: 'Custom authentication',
          link: '/guide/custom-authentication'
        },
        {
          text: 'Custom Navbar',
          link: '/guide/custom-navbar'
        }
      ],
    }
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})
