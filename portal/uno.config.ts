import { presetWebFonts, defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
        provider: "google",
        fonts: {
            playfair: {
              name:  "Playfair Display",
              weights: ["400"]
            }
        }
    })
  ],
  transformers: [
    transformerVariantGroup()
  ],
  
})