import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

const babelPlugins: string[] = [];

if (process.env.MIGHTYMELD) {
  babelPlugins.push('mightymeld/babel-plugin-mightymeld');
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*'],
      exclude: /node_modules/,
      plugins: babelPlugins,
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
    }),
  ]
});