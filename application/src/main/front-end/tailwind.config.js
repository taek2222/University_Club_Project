/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '400': '400px'
      },
      gradientColorStops: theme => ({
        'story-start': '#feda75', // 노란색
        'story-middle': '#fa7e1e', // 주황색
        'story-end': '#d66d75', // 보라색
      }),
    },
  },
  plugins: [],
}

