/** @type {import('tailwindcss').Config} */

// import typography from "@tailwindcss/typography";
// import forms from "@tailwindcss/forms";
import theme from './theme.config.js';

export default {
  content: {
    relative: true,
    files: [
      "./src/components/**/*.{js,jsx}",
      "./src/hooks/**/*.js",
      "./src/models/**/*.js",
      "./src/pages/**/*.{js,jsx}",
      "./src/utils/**/*.js",
      "./src/*.jsx",
      "./index.html"
    ]
  },
  theme: {
    extend: theme
  },
  plugins: [
    // typography,
    // forms,
  ]
}
