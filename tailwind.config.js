/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montseratt: ["Montserrat", "sans-serif"],
        "hedvig-serif": ["Hedvig Letters Serif", "serif"],
        visby: ["Visby CF", "sans-serif"],
      },
      keyframes: {
        ripple1: {
          "0%": {
            width: "0px",
            height: "0px",
            opacity: "0.7",
          },
          "100%": {
            width: "500px",
            height: "500px",
            opacity: "0",
          },
        },
        ripple2: {
          "0%": {
            width: "0px",
            height: "0px",
            opacity: "0.5",
          },
          "100%": {
            width: "400px",
            height: "400px",
            opacity: "0",
          },
        },
        ripple3: {
          "0%": {
            width: "0px",
            height: "0px",
            opacity: "0.3",
          },
          "100%": {
            width: "300px",
            height: "300px",
            opacity: "0",
          },
        },
      },
      animation: {
        "ripple-1": "ripple1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "ripple-2": "ripple2 4s cubic-bezier(0.4, 0, 0.2, 1) 1s infinite",
        "ripple-3": "ripple3 4s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite",
      },

      backgroundImage: {
        'exthgen-gradient': 'linear-gradient(to right, #FD169C, #FE497A, #FE7B59)',
      },
      colors: {
        'gradient-text': 'transparent',
      },
      textGradient: {
        'exthgen': 'bg-clip-text text-transparent bg-exthgen-gradient',
      },
    },
    
  },
  plugins: [],
};
