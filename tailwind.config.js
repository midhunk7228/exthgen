/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "zoom-in-95": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out-95": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        "ripple-1": "ripple1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "ripple-2": "ripple2 4s cubic-bezier(0.4, 0, 0.2, 1) 1s infinite",
        "ripple-3": "ripple3 4s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite",
		"fade-in": "fade-in 300ms ease-out",
        "fade-out": "fade-out 300ms ease-in",
        "zoom-in-95": "zoom-in-95 300ms ease-out",
        "zoom-out-95": "zoom-out-95 300ms ease-in",
      },
      backgroundImage: {
        "exthgen-gradient":
          "linear-gradient(104.24deg, #FD169C 0%, #FE497A 47.92%, #FE7B59 100%)",
      },
      colors: {
        "gradient-text": "transparent",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      textGradient: {
        exthgen: "bg-clip-text text-transparent bg-exthgen-gradient",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
