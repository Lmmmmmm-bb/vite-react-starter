import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
      scale: 1.2,
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
});
