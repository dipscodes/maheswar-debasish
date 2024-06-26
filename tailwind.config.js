/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "discord-sidebar": "#1e1f22",
        "discord-secondary": "#2b2d31",
        "discord-tertiary": "#313338",
        "text-generic-color": "#aad7f5",
        "text-generic-color-muted": "#6d899c",
        "discord-button-color": "#5865f2",
        "discord-button-color-hover": "#4656c6",
        "discord-bg-1": "#313338",
        "discord-bg-2": "#060607",
        "discord-cross-color": "#6f7278",
        "discord-text-color-1": "#dbdee1",
        "saffron-topbar": "#ff9933",
        "persian-blue": "#1c39bb",
      },
    },
  },
  plugins: [],
};
