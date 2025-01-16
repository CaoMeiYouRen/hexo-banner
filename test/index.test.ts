import { describe, it, expect, vi } from 'vitest'
import type Hexo from 'hexo'
import { bannerPlugin, BannerConfig } from '../src/index'

const createMockHexo = (config: BannerConfig = {}) => ({
    config: {
        banner: config,
    },
    extend: {
        filter: {
            register: vi.fn(),
        },
    },
    // 添加必要的 Hexo 属性
    on: vi.fn(),
    emit: vi.fn(),
    base_dir: '',
    public_dir: '',
    source_dir: '',
    theme_dir: '',
    script_dir: '',
    scaffold_dir: '',
    plugin_dir: '',
    env: {
        debug: false,
        args: {},
        init: false,
        cmd: '',
    },
} as unknown as Hexo)

describe('bannerPlugin', () => {
    it('should skip when enable is false', () => {
        const mockHexo = createMockHexo({ enable: false })
    })

    it('should register filter when enable is true', () => {
        const mockHexo = createMockHexo({ enable: true })
        bannerPlugin(mockHexo)
        expect(mockHexo.extend.filter.register).toHaveBeenCalled()
    })

    it('should use default content when not provided', async () => {
        const mockHexo = createMockHexo({ enable: true })
        bannerPlugin(mockHexo)

        const callback = mockHexo.extend.filter.register.mock.calls[0][1]
        const result = await callback('<html><header></header></html>')

        expect(result).toContain('Default Banner Content')
    })

    it('should insert banner at top by default', async () => {
        const mockHexo = createMockHexo({ enable: true })
        bannerPlugin(mockHexo)

        const callback = mockHexo.extend.filter.register.mock.calls[0][1]
        const result = await callback('<html><header></header></html>')

        expect(result).toMatch(/<div class="hexo-banner".*>.*<\/div><header>/)
    })

    it('should insert banner at bottom when configured', async () => {
        const mockHexo = createMockHexo({ enable: true, position: 'bottom' })
        bannerPlugin(mockHexo)

        const callback = mockHexo.extend.filter.register.mock.calls[0][1]
        const result = await callback('<html><footer></footer></html>')

        expect(result).toMatch(/<div class="hexo-banner".*>.*<\/div><footer>/)
    })

    it('should apply custom styles', async () => {
        const mockRegister = vi.fn()
        const mockHexo = {
            ...createMockHexo({
                enable: true,
                styles: {
                    'background-color': 'red',
                },
            }),
            extend: {
                filter: {
                    register: mockRegister,
                },
            },
        }
        bannerPlugin(mockHexo)

        const callback = mockRegister.mock.calls[0][1]
        const result = await callback('<html><header></header></html>')

        expect(result).toContain('background-color: red')
    })
})
