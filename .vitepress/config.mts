import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识库",
  description: "知识永无止境",
  head: [
    ['link',{rel:'icon',href:'/public/知识库.svg'}], 
  ],
  base: "/repository/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/public/知识库.svg',
    nav: [
      { text: '主站', link: '/' },
      { text: '后端',
        items: [  
          { text: 'GIT版本管理', link: '/backend/git' },  
        ]
      },
      { text: '中间件',
        items: [  
          { text: 'Drools', link: '/middleware/drools' },  
        ]
      },
      { text: '前端', 
        items: [  
          { text: 'vue3', link: '/frontend/vue3' },  
        ]
      },
    ],

    sidebar: {
      '/backend/' :[
        {
          text: '后端',
          link: '/backend/',
          items: [
            { text: 'GIT版本管理', link: '/backend/git' },
          ]
        }
      ],
      '/middleware/' :[
        {
          text: '中间件',
          link: '/middleware/',
          items: [
            { text: 'Drools', link: '/middleware/drools' },
          ]
        }
      ],
      '/frontend/' :[
        {
          text: '前端',
          link: '/frontend/',
          items: [
            { text: 'vue3', link: '/frontend/vue3' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codezengjie' }
    ],

    search: {
      provider: 'local'
    }
  }
})
