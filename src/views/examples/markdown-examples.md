# Markdown 扩展示例

本页演示了 VitePress 提供的一些内置 markdown 扩展。

## 语法高亮

VitePress 提供由[Shiki](https://github.com/shikijs/shiki)支持的语法高亮功能，以及行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 定制容器

**输入**

```md
::: info 信息
这是一个信息框。
:::

::: tip 提示
这是一个小提示。
:::

::: warning 警告
这是一个警告。
:::

::: danger 危险的警告
这是一个危险的警告。
:::

::: details 详情
这是一个详细信息块。
:::
```

**Output**

::: info 信息
这是一个信息框。
:::

::: tip 提示
这是一个小提示。
:::

::: warning 警告
这是一个警告。
:::

::: danger 危险的警告
这是一个危险的警告。
:::

::: details 详情
这是一个详细信息块。
:::

## 更多

查看文档以获取[markdown 扩展的完整列表](https://vitepress.dev/zh/guide/markdown)。