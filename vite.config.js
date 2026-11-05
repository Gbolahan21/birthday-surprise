import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    server: {
      hmr: true,
      open: true,
    },
    plugins: [
      react({
        include: /\.(js|jsx|ts|tsx)$/,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // add .jsx explicitly
    },
    base: '/birthday-surprise/',
  };
})
