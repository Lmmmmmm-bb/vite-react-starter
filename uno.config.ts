import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
});
