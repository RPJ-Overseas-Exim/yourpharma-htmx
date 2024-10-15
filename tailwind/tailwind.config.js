/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["../views/**/*.{templ,go}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                cardForeground: "hsl(var(--card))",
                popover: "hsl(var(--popover))",
                popoverForeground: "hsl(var(--popover))",
                primary: "hsl(var(--primary))",
                primaryForeground: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                secondaryForeground: "hsl(var(--secondary))",
                muted: "hsl(var(--muted))",
                mutedForeground: "hsl(var(--muted))",
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
