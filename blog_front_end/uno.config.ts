// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

// @ts-ignore
export default defineConfig({
    rules: [
        //动态规则 使用正则表达式进行匹配  可以动态的进行匹配
        //m-3 转化成css .m-3 { margin: 0.75rem; } m-100 转化成css .m-100 { margin: 25rem; }
        [/^m-(\d+)$/, ([, d]) => ({margin: `${d / 4}rem`})],
        ['full-screen', {width: '100vw', height: '100vh'}],
    ],
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})