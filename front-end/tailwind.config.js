/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        400: "400px",
      },
      gradientColorStops: (theme) => ({ // 헤더 (메뉴) 테두리
        "story-start": "#feda75",
        "story-middle": "#fa7e1e",
        "story-end": "#d66d75",
      }),
      keyframes: {
        heartBurst: { // 하트 (좋아요) 애니메이션
          "0%, 100%": { opacity: "0", transform: "scale(0.5) translateY(0)" },
          "10%": { opacity: "1", transform: "scale(1.2) translateY(0)" },
          "20%": { transform: "scale(1.2) rotate(-28deg)" },
          "30%": { transform: "scale(1.2) rotate(28deg)" },
          "40%, 100%": { transform: "scale(1.2) rotate(0deg)" },
          "95%": { opacity: "0", transform: "scale(1.2) translateY(-100px)" },
        },
      },
      animation: { // 하트 (좋아요) 애니메이션 시간
        heartBurst: "heartBurst 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
