module.exports = {
  title: 'Sroxck',
  description: '技术文档',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // permalink: "/:slug",
  base: '/', // 这是部署到github相关的配置 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // search: false,
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: '上次更新',
    smoothScroll: true,
    activeHeaderLinks:true,
    // nav:[ // 导航栏配置
    //   {text: '随手记', link: '/Outher/'},      
    // ],
    // sidebar: {
    //   '/array/':[
    //     "findMax.md",
    //     "findMin.md",
    //     "chunk.md",
    //   ],
    //   '/string/':[
    //     "toHump.md",
    //   ]
    // },
    sidebar: [
      {
        title: '数组',   // 必要的
        path: '/array/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/array/findMax',
          '/array/findMin',
          '/array/each',
          '/array/chunk',
          '/array/compact',
        ]
      },
      {
        title: '字符串',
        path: '/string/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [ 
          '/string/toHump',
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],

    plugins: [
      ['vuepress-plugin-table-of-contents'],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
    ]
  }
};
