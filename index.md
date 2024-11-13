---
# https://xiaotaokh.github.io/blog

# 页面的布局, home 主页的特殊布局  doc 默认文档样式 page 自定义布局
layout: home

# 当 layout 设置为 home 时，定义主页顶部的内容
hero:
  name: "xiaotaokh"
  text: "vitePress"
  tagline: 我的伟大项目标语
  image:
    src: /src/assets/home/home.jpeg
    alt: VitePress
  actions:
    - theme: brand
      text: Markdown 示例
      link: /src/views/examples/markdown-examples
    - theme: alt
      text: API 示例
      link: /src/views/examples/api-examples

# 当 layout 设置为 home 时，定义主页底部特色内容
features:
  - icon: icon-gongneng-copy  # 图标
    title: 特征 A  # 标题
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit  # 详情
    link: /src/views/examples/markdown-examples/a  # 外部内部链接
    linkText: 更多 # 链接提示
    
  - title: 功能 B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 功能 C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { useData } from 'vitepress';

const { theme, page, frontmatter } = useData()
</script>

[//]: # (<pre>{{ frontmatter }}</pre>)
<i class="iconfont icon-gongneng-copy"></i>

<style lang="scss">
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  }
</style>