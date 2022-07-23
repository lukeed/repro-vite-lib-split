import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [svelte()],
	build: {
		lib: {
			name: 'howdy',
			entry: 'src/main.ts',
			formats: ['iife', 'es']
		}
	}
})
