/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 400,
            },
            h2: {
              fontWeight: 400,
              fontStyle: "italic",
            },

            h3: {
              fontWeight: 400,
              fontStyle: "italic",
            },
            h4: {
              fontWeight: 400,
              fontStyle: "italic",
            },
            h5: {
              fontWeight: 400,
            },
            h6: {
              fontWeight: 400,
            },
          },
        },
      },
      fontSize: {
        sm: "0.875rem",
        xs: "0.75rem",
      },
      fontFamily: {
        serif: ["minion-pro", "Times New Roman", "Times", "serif"],
      },
      colors: {
        black: "#2E2B2B",
        yellow: {
          dark: "#897C34",
          light: "#FFF0A1",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
