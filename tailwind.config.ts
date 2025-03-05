import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/preline/preline.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        //Tono para temas oscuros
        // Gradiente 1: Profundidad de océano
        "gradient-ocean":
          "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",

        // Gradiente 2: Aurora boreal
        "gradient-aurora":
          "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",

        // Gradiente 3: Medianoche urbana
        "gradient-midnight":
          "linear-gradient(135deg, #121212 0%, #232526 50%, #414345 100%)",

        // Gradiente 4: Espacio profundo
        "gradient-space":
          "linear-gradient(135deg, #0A0A0A 0%, #121621 50%, #1F2A40 100%)",

        // Gradiente 5: Atardecer oscuro
        "gradient-sunset":
          "linear-gradient(135deg, #232526 0%, #414345 50%, #633231 100%)",

        // Gradiente 6: Azul eléctrico
        "gradient-electric":
          "linear-gradient(135deg, #111111 0%, #131C48 50%, #004E92 100%)",

        // Gradiente 7: Bosque nocturno
        "gradient-forest":
          "linear-gradient(135deg, #151515 0%, #132414 50%, #1D3B26 100%)",

        // Gradiente 8: Púrpura cibernético
        "gradient-cyber":
          "linear-gradient(135deg, #110E27 0%, #2A1758 50%, #401A59 100%)",
        // Gradiente 9: Carbón metálico
        "gradient-carbon":
          "linear-gradient(135deg, #121212 0%, #1A1A25 50%, #252A34 100%)",
        // Gradiente 10: Amanecer oscuro
        "gradient-dark-dawn":
          "linear-gradient(135deg, #101010 0%, #1F1013 50%, #2D1519 100%)",

        //Tono para temas claros
        // Gradiente 2: Neblina matutina
        "gradient-mist":
          "linear-gradient(135deg, #F5F7FA 0%, #E0E7F5 50%, #D3E0F7 100%)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
