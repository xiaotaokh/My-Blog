import{_ as a,c as i,a0 as n,o as l}from"./chunks/framework.Dl_-ksQ2.js";const c=JSON.parse('{"title":"Markdown 扩展示例","description":"","frontmatter":{},"headers":[],"relativePath":"Examples/markdown-examples.md","filePath":"Examples/markdown-examples.md"}'),p={name:"Examples/markdown-examples.md"};function e(t,s,h,k,r,E){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="markdown-扩展示例" tabindex="-1">Markdown 扩展示例 <a class="header-anchor" href="#markdown-扩展示例" aria-label="Permalink to &quot;Markdown 扩展示例&quot;">​</a></h1><p>本页演示了 VitePress 提供的一些内置 markdown 扩展。</p><h2 id="语法高亮" tabindex="-1">语法高亮 <a class="header-anchor" href="#语法高亮" aria-label="Permalink to &quot;语法高亮&quot;">​</a></h2><p>VitePress 提供由<a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>支持的语法高亮功能，以及行高亮等附加功能：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>输出</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="定制容器" tabindex="-1">定制容器 <a class="header-anchor" href="#定制容器" aria-label="Permalink to &quot;定制容器&quot;">​</a></h2><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info 信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个信息框。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip 提示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个小提示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning 警告</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个警告。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger 危险的警告</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个危险的警告。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details 详情</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这是一个详细信息块。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">信息</p><p>这是一个信息框。</p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这是一个小提示。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>这是一个警告。</p></div><div class="danger custom-block"><p class="custom-block-title">危险的警告</p><p>这是一个危险的警告。</p></div><details class="details custom-block"><summary>详情</summary><p>这是一个详细信息块。</p></details><h2 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-label="Permalink to &quot;更多&quot;">​</a></h2><p>查看文档以获取<a href="https://vitepress.dev/zh/guide/markdown" target="_blank" rel="noreferrer">markdown 扩展的完整列表</a>。</p>`,19)]))}const o=a(p,[["render",e]]);export{c as __pageData,o as default};
