import purgeCSSPlugin from '@fullhuman/postcss-purgecss'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// O CSS completo do Bootstrap tem ~420 KB e bloqueia a renderização.
// Na build, removemos dele as regras que o site não usa (o CSS próprio do projeto não é tocado).
const purgeBootstrap = () => {
  const purge = purgeCSSPlugin({
    content: ['./index.html', './src/**/*.{js,jsx}'],
    // Classes montadas dinamicamente / aplicadas por estado.
    safelist: {
      standard: [/^is-/, /^was-validated$/, /^show$/, /^active$/, /^disabled$/],
      greedy: [/:focus/, /:hover/, /:disabled/, /:checked/, /::placeholder/],
    },
    variables: false,
    keyframes: true,
    fontFace: true,
  })
  return {
    postcssPlugin: 'purge-bootstrap',
    async OnceExit(root, helpers) {
      const file = root.source?.input?.file?.replace(/\\/g, '/') ?? ''
      if (!file.includes('/node_modules/bootstrap/')) return
      await purge.OnceExit(root, helpers)
    },
  }
}
purgeBootstrap.postcss = true

export default defineConfig(({ command }) => ({
  plugins: [react()],
  css: {
    postcss: {
      plugins: command === 'build' ? [purgeBootstrap()] : [],
    },
  },
}))
