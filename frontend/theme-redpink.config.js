export default {
  rotate: {
    "270": "270deg",
    "360": "360deg"
  },
  colors: {
    "black-900": "#141414",
    "sidebar-button": "#fff",
    sidebar: "#fef2f3",
    "historical-msg-system": "#fde6e7",
    "historical-msg-user": "#FEFEFE",
    outline: "#e0e0e0",
    "white": "#fff",
    "zinc-300" : "#999",
    'slate': {
      '50': '#f5f8f8',
      '100': '#ecf2f3',
      '200': '#dde5e8',
      '300': '#c7d5da',
      '400': '#b0c0c9',
      '500': '#9bacb9',
      '600': '#8496a7',
      '700': '#708090',
      '800': '#5d6976',
      '900': '#4e5861',
      '950': '#2e3438',
    },
    'accent': { 
      '50': '#fef2f3',
      '100': '#fde6e7',
      '200': '#fbd0d5',
      '300': '#f7aab2',
      '400': '#f27a8a',
      '500': '#ea546c',
      '600': '#d5294d',
      '700': '#b31d3f',
      '800': '#961b3c',
      '900': '#811a39',
      '950': '#48091a',
    },
    'typography': { 
      '50': '#f6f6f6',
      '100': '#e7e7e7',
      '200': '#d1d1d1',
      '300': '#b0b0b0',
      '400': '#888888',
      '500': '#6d6d6d',
      '600': '#5d5d5d',
      '700': '#4a4a4a',
      '800': '#454545',
      '900': '#3d3d3d',
      '950': '#262626',
    },
  },
  backgroundImage: {
    "selected-preference-gradient":
      "linear-gradient(180deg, #313236 0%, rgba(63.40, 64.90, 70.13, 0) 100%);",
    "main-gradient": "linear-gradient(180deg, #FEFEFE 0%, #fff 100%)",
    "modal-gradient":
      "linear-gradient(90deg, #fff 100%, #f2f2f2 0%)",
    "sidebar-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
    "menu-item-selected-gradient": "linear-gradient(90deg, #fff 0%, #fff 70%)",
    "workspace-item-gradient":
      "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
    "workspace-item-selected-gradient":
      "linear-gradient(90deg, #fff 0%, #fff 70%)",
    "preference-gradient":
    "linear-gradient(180deg, #5A5C63 0%, rgba(90, 92, 99, 0.28) 100%);",
  },
  fontFamily: {
    sans: [
      'Segoe UI', 
      "Tahoma", 
      "Geneva", 
      "Verdana",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ]
  },
  animation: {
    sweep: "sweep 0.5s ease-in-out"
  },
  keyframes: {
    sweep: {
      "0%": { transform: "scaleX(0)", transformOrigin: "bottom left" },
      "100%": { transform: "scaleX(1)", transformOrigin: "bottom left" }
    },
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    },
    fadeOut: {
      "0%": { opacity: 1 },
      "100%": { opacity: 0 }
    }
  }
}