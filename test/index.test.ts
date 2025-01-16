import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import type Hexo from 'hexo'
import { bannerPlugin, BannerConfig } from '../src/index'

describe('bannerPlugin', () => {
    const mockHexo = {
        config: {},
        extend: {
            filter: {
                register: vi.fn(() => () => { }),
            },
        },
    } as unknown as Hexo

    it('should not register filter when disabled', () => {
        const config: BannerConfig = { enable: false }
        mockHexo.config.banner = config
        bannerPlugin(mockHexo)
        expect(mockHexo.extend.filter.register).not.toHaveBeenCalled()
    })

    it('should register filter when enabled', () => {
        const config: BannerConfig = { enable: true }
        mockHexo.config.banner = config
        bannerPlugin(mockHexo)
        expect(mockHexo.extend.filter.register).toHaveBeenCalled()
    })

    describe('with enabled plugin', () => {
        let filterCallback: (html: string) => Promise<string>

        beforeEach(() => {
            const config: BannerConfig = { enable: true }
            mockHexo.config.banner = config
            bannerPlugin(mockHexo)
            // 模拟register方法调用并返回filter回调
            const mockRegister = mockHexo.extend.filter.register as Mock
            mockRegister.mockImplementation((_, callback) => {
                filterCallback = callback
            })
        })

        it('should insert banner at top by default', async () => {
            const html = '<html><header></header></html>'
            const result = await filterCallback(html)
            expect(result).toContain('class="hexo-banner"')
            expect(result.indexOf('hexo-banner')).toBeLessThan(result.indexOf('</header>'))
        })

        it('should insert banner at bottom when configured', async () => {
            mockHexo.config.banner.position = 'bottom'
            const html = '<html><footer></footer></html>'
            const result = await filterCallback(html)
            expect(result.indexOf('hexo-banner')).toBeLessThan(result.indexOf('</footer>'))
        })

        it('should apply default styles', async () => {
            const html = '<html><header></header></html>'
            const result = await filterCallback(html)
            expect(result).toContain('background-color: #f8f8f8')
            expect(result).toContain('color: #333')
        })

        it('should apply custom styles', async () => {
            mockHexo.config.banner.styles = { 'font-size': '20px' }
            const html = '<html><header></header></html>'
            const result = await filterCallback(html)
            expect(result).toContain('font-size: 20px')
        })

        it('should render markdown content', async () => {
            mockHexo.config.banner.content = '**bold** text'
            const html = '<html><header></header></html>'
            const result = await filterCallback(html)
            expect(result).toContain('<strong>bold</strong>')
        })
    })
})
