import Hexo from 'hexo'
import { marked } from 'marked'
import * as cheerio from 'cheerio'

export interface BannerConfig {
    enable?: boolean
    content?: string
    position?: 'top' | 'bottom'
    styles?: any
    css?: string
}

export function bannerPlugin(hexo: Hexo) {
    const config: BannerConfig = hexo.config.banner || {}
    if (!config.enable) {
        return
    }
    hexo.extend.filter.register('after_render:html', async (data) => {
        const bannerContent = config.content || 'Default Banner Content'
        const bannerPosition = config.position || 'top' // 默认插入到 <header>
        const bannerCss = config.css || ''
        // 默认的 CSS 样式
        const defaultStyles = `
                .hexo-banner {
                    background-color: #f8f8f8;
                    color: #333;
                    padding: 10px;
                    text-align: center;
                    border-bottom: 1px solid #ddd;
                }
                ${bannerCss}`
        const bannerStyles = config.styles || {} // 用户自定义的 CSS 样式

        // 将 Markdown 内容转换为 HTML
        const bannerHtml = await marked(bannerContent)
        // 将 Banner 内容包裹在一个带有样式的 div 中
        const bannerWrapper = `
    <div class="hexo-banner" style="${Object.keys(bannerStyles).map((key) => `${key}: ${bannerStyles[key]};`).join(' ')}">
      ${bannerHtml}
    </div>
  `

        // 使用 cheerio 加载 HTML
        const $ = cheerio.load(data)
        // 插入默认的 CSS 样式
        $('head').append(`<style>${defaultStyles}</style>`)
        // 根据 bannerPosition 插入 Banner
        if (bannerPosition === 'top') {
            const $header = $('header')
            if ($header.length > 0) {
                $header.first().prepend(bannerWrapper)
            }
        } else if (bannerPosition === 'bottom') {
            const $footer = $('footer')
            if ($footer.length > 0) {
                $footer.first().prepend(bannerWrapper)
            }
        }
        // 将修改后的 HTML 返回
        return $.html()

    })
}

if (typeof hexo !== 'undefined') {
    bannerPlugin(hexo)
}
