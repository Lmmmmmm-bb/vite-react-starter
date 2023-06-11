import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
      scale: 1.2,
    }),
  ],
});
