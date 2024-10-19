<h1 align="center">hexo-banner </h1>
<p>
  <a href="https://www.npmjs.com/package/hexo-banner" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/hexo-banner.svg">
  </a>
  <a href="https://www.npmjs.com/package/hexo-banner" target="_blank">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/hexo-banner?label=npm%20downloads&color=yellow">
  </a>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/CaoMeiYouRen/hexo-banner.svg" />
  <a href="https://github.com/CaoMeiYouRen/hexo-banner/actions?query=workflow%3ARelease" target="_blank">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/CaoMeiYouRen/hexo-banner/release.yml?branch=master">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D16-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/hexo-banner#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/hexo-banner/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/hexo-banner/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/hexo-banner?color=yellow" />
  </a>
</p>


> Add a custom banner at the top of each page that supports HTML and Markdown formatted text content.
>
> 在每个页面的顶部添加一个自定义的 Banner，支持 HTML 和 Markdown 格式的文本内容。

## 🏠 主页

[https://github.com/CaoMeiYouRen/hexo-banner#readme](https://github.com/CaoMeiYouRen/hexo-banner#readme)


## 📦 依赖要求


- node >=16

## 🚀 安装

```sh
npm install hexo-banner
```

## 👨‍💻 使用

在 `_config.yml` 中进行如下配置。

```yml
banner:
  content: |
    # 这是一段 banner
  position: top
  styles:
    background-color: #f8f8f8
    color: #333
  css: |
    @media (min-width: 768px) {
      .hexo-banner {
        margin-left: 240px;
      }
    }
```


| 属性     | 描述                                                         | 类型   | 可选值               |
| -------- | ------------------------------------------------------------ | ------ | -------------------- |
| `content` | 支持 Markdown 的内容。                                       | string | -                    |
| `position` | 插入位置，支持插入到 header 或 footer 中。                   | string | `top` \| `bottom`    |
| `styles`  | 设置行内样式，对象类型。                                     | object | -                    |
| `css`     | 设置 CSS，字符串类型。                                       | string | -                    |

## 🛠️ 开发

```sh
npm run dev
```

## 🔧 编译

```sh
npm run build
```

## 🔍 Lint

```sh
npm run lint
```

## 💾 Commit

```sh
npm run commit
```


## 👤 作者


**CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)

* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝 贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/hexo-banner/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/hexo-banner/blob/master/CONTRIBUTING.md).

## 💰 支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CaoMeiYouRen/hexo-banner&type=Date)](https://star-history.com/#CaoMeiYouRen/hexo-banner&Date)

## 📝 License

Copyright © 2024 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/hexo-banner/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [cmyr-template-cli](https://github.com/CaoMeiYouRen/cmyr-template-cli)_
