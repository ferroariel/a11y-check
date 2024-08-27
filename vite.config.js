import { defineConfig } from 'vite'
import viteTsconfigPaths  from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths()
  ],
  input: './src/main.jsx',
  test: {
   globals: true,
    environment: 'jsdom',
  },
});

