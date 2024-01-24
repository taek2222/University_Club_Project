/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '400': '400px'
      },
      gradientColorStops: theme => ({
        'story-start': '#ff758c',  // 시작 색상
        'story-middle': '#ff7eb3', // 중간 색상
        'story-end': '#ff85be',    // 끝 색상
      }),
    },
  },
  plugins: [],
}

