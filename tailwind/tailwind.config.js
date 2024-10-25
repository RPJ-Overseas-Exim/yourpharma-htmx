/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["../views/**/*.{templ,go}"],
    theme: {
        extend: {
            gridTemplateColumns:{
                basic: "repeat(auto-fit, minmax(300px, 1fr))"
            },
            colors: {
                background: {
                    DEFAULT:"hsl(var(--background))",
                    transparent:{
                        sm: "hsl(var(--background) / 90%)",
                        md: "hsl(var(--background) / 70%)",
                        lg: "hsl(var(--background) / 50%)"
                    }
                },
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                cardForeground: "hsl(var(--card))",
                popover: "hsl(var(--popover))",
                popoverForeground: "hsl(var(--popover))",
                primary: "hsl(var(--primary))",
                primaryForeground: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                secondaryForeground: "hsl(var(--secondary))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                    transparent:{
                        sm: "hsl(var(--muted) / 90%)",
                        md: "hsl(var(--muted) / 70%)",
                        lg: "hsl(var(--muted) / 50%)"
                    }
                },
                accent: "hsl(var(--accent))",
                accentForeground: "hsl(var(--accent))",
                destructive: "hsl(var(--destructive))",
                destructiveForeground: "hsl(var(--destructive))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                radius: "hsl(var(--radius))",
                chart1: "hsl(var(--chart))",
                chart2: "hsl(var(--chart))",
                chart3: "hsl(var(--chart))",
                chart4: "hsl(var(--chart))",
                chart5: "hsl(var(--chart))"
            }
        }
    }
}
