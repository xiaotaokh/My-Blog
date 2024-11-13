import { defineConfig, loadEnv } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig(({ command, mode }) => {
  return {
    title: "xiaotaokh", // 站点标题(浏览器tab名称：title)
    titleTemplate: "blog", // 站点标题描述(浏览器tab名称：title | titleTemplate)
    description: "小小的人儿啊，风生水起啊，天天就爱穷开心那", // 站点的描述 体现在HTML 中的 <meta> 标签。
    // lang: 'en-US', // 语言 <html lang="en-US">
    /**
     * 开发模式下，使用绝对路径
     * 生产环境下，站点将部署到的 base URL，以 / 开头和结尾，对应https://xiaotaokh.github.io/blog中的blog
     */
    base: mode === 'production' ? "/blog/" : "/",
    // Vite 配置选项
    vite: {},
    // @vitejs/plugin-vue 选项
    vue: {},
    // markdown解析器配置
    markdown: {},
    head: [
      ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4743040_m7ehua33vvr.css' }], // iconfont
      ['link', { rel: 'icon', href: '/favicon/favicon.png' }],  // 网站图标，相对于项目根目录，受srcDir字段影响
    ],
    srcDir: "./src", // markdown文件所在的根目录，相对于项目根目录进行设置。
    srcExclude: ['**/README.md', '**/TODO.md'], // 用于匹配应排除作为源内容输出的 markdown 文件
    outDir: "./docs", // 项目的构建输出位置, 或者在package.json 中 scripts.build 配置 vitepress build --outDir docs
    assetsDir: "static", // 指定放置生成的静态资源的目录。该路径应位于 outDir 内，并相对于它进行解析。
    cacheDir: "./.vitepress/cache", // 缓存文件的目录，相对于项目根目录
    metaChunk: true, // 当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。
    // 主题配置
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/views/home' },
        { text: '示例', link: '/views/examples/markdown-examples' }
      ],
      
      sidebar: [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/views/examples/markdown-examples' },
            { text: 'API 示例', link: '/views/examples/api-examples' }
          ]
        }
      ],
      
      socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaotaokh' }
      ]
    }
  }
})
