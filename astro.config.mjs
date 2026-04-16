// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
    //site: '',
    //base: '',  // subfolder/repo name?
    //outDir: './dist',
});
