/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "poppins": ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        neobrutalism: "8px 8px 0px black",
        "neobrutalism-sm": "4px 4px 0px black",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#17cf17",
        "background-light": "#f6f8f6",
        "background-dark": "#112111",
        "foreground-light": "#112111",
        "foreground-dark": "#f6f8f6",
        "card-light": "#ffffff",
        "card-dark": "#1a2e1a",
        "muted-light": "#6b7280",
        "muted-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
        "input-light": "#f3f4f6",
        "input-dark": "#1f2937",
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
        // primary: {
        // 	DEFAULT: 'hsl(var(--primary))',
        // 	foreground: 'hsl(var(--primary-foreground))'
        // },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
