import { HexoConfig } from 'hexo'

declare module 'hexo' {
    interface HexoConfig {
        banner?: {
            content: string
            position: 'top' | 'bottom'
            styles: any
        }
    }
}
