// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
import path from 'path'; // Importo path para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Importo fileURLToPath para manejar URLs de archivos
import { dirname } from 'path'; // Importo dirname para manejar el nombre del directorio

const __filename = fileURLToPath(import.meta.url); // Obtengo el nombre del archivo
const __dirname = dirname(__filename); // Obtengo el nombre del directorio

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});