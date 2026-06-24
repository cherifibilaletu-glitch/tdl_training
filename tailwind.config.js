/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep navy + subtle blue palette
        navy: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#c7d2e0",
          300: "#9fb1c9",
          400: "#6b82a3",
          500: "#465f85",
          600: "#2f4368",
          700: "#22304b",
          800: "#162033",
          900: "#0d1626",
          950: "#070d18",
        },
        brand: {
          50: "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd7ff",
          300: "#8ebeff",
          400: "#599aff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        // Arabic
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        almarai: ["Almarai", "sans-serif"],
        kufi: ["Reem Kufi", "sans-serif"],
        // Latin
        inter: ["Inter", "sans-serif"],
        // Defaults applied via .lang-* classes
        sans: ["Tajawal", "Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(13,22,38,0.06), 0 8px 24px -12px rgba(13,22,38,0.18)",
        card: "0 1px 0 rgba(13,22,38,0.04), 0 10px 30px -18px rgba(13,22,38,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
