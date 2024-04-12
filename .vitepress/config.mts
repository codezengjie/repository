import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识库",
  description: "知识永无止境",
  head: [
    ['link',{rel:'icon',href:'知识库.svg'}], 
  ],
  base: "/repository/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '知识库.svg',
    nav: [
      { text: '主站', link: '/' },
      { text: '技术进阶',
        items: [  
          { text: 'GIT版本管理', link: '/technology/git' },
          { text: 'Drools规则引擎', link: '/technology/drools' },
        ]
      },
      { text: 'DevOps', link: ''},
      { text: '标签管理', link: ''},
    ],

    sidebar: {
      '/technology/' :[
        {
          text: '技术进阶',
          link: '/technology/',
          items: [
            { text: 'GIT版本管理', link: '/technology/git' },
            { text: 'Drools规则引擎', link: '/technology/drools' },
          ]
        }
      ],
      '/DevOps/' :[
        {
          text: 'DevOps',
          link: '/DevOps/',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codezengjie' }
    ],

    search: {
      provider: 'local'
    }
  }
})
