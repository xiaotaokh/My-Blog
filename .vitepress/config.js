import { defineConfig, loadEnv } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig(({ command, mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')
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
    vite: {
      // 插件
      server: {
        host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
        port: env.VUE_APP_PORT || 5173, // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      },
      resolve: {
        // alias 数组写法
        alias: [
          {
            find: '@',
            replacement: path => {
              return join(__dirname, "src") // 配置路径别名，快捷指向相对路径
            }
          }
        ],
        // alias 对象写法
        // alias: {
        //   '@': join(__dirname, "src"), // 配置路径别名，快捷指向相对路径
        // },
        extensions: ['.js', '.vue', '.json', '.ts'], // 导入时想要省略的扩展名列表
      },
    },
    
    // @vitejs/plugin-vue 选项
    vue: {},
    
    // markdown解析器配置
    markdown: {},
    
    head: [
      // ['meta', { httpEquiv: 'refresh', content: '0; url=/views/home' }], // 重定向到 /views/home
      ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4743040_m7ehua33vvr.css' }], // iconfont
      ['link', { rel: 'icon', href: '/favicon/favicon.png' }],  // 网站图标，相对于项目根目录，受srcDir字段影响（暂时不知道为啥）
    ],
    /**
     * markdown文件所在的根目录，相对于项目根目录进行设置。不会直接影响 public 文件夹。
     * . 和 ./ 一样
     * 配置为 ./src 后会导致public文件夹build后不出现在docs里（暂时不知道为啥）
     */
    srcDir: ".",
    srcExclude: ['**/README.md', '**/TODO.md'], // 用于匹配应排除作为源内容输出的 markdown 文件
    outDir: "./docs", // 项目的构建输出位置, 或者在package.json 中 scripts.build 配置 vitepress build --outDir docs
    assetsDir: "static", // 指定放置生成的静态资源的目录，仅影响在 Markdown 文件和组件中引入的静态资源（如图片、JS、CSS 等）
    cacheDir: "./.vitepress/cache", // 缓存文件的目录，相对于项目根目录
    metaChunk: true, // 当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。
    // 主题配置 https://vitepress.dev/reference/default-theme-config
    themeConfig: {
      // 路由重定向
      redirects: {
        '/views/examples/markdown-examples': '/markdown-examples', // 重定向旧路径到新路径
      },
      nav: [
        { text: '首页', link: '/' },
        { text: '示例', link: '/src/views/examples/markdown-examples' }
      ],
      
      sidebar: [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/src/views/examples/markdown-examples' },
            { text: 'API 示例', link: '/src/views/examples/api-examples' }
          ]
        }
      ],
      
      socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaotaokh' }
      ]
    },
  }
})
