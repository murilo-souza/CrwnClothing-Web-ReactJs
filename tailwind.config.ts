import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        certification: '45% 10% 45%',
      },

      colors: {
        github: '#171515',
        skills: '#7C3AED',
      },
    },
  },
  plugins: [],
}
export default config
