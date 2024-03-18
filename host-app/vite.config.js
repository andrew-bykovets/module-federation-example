import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        todoRemoteApp: "http://localhost:5001/assets/remoteEntry.js",
        counterRemoteApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    external: ["react", "react-router", "react-router-dom"],
    output: {
      globals: {
        react: "React",
      },
    },
  },
});
