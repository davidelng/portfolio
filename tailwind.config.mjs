/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': 'var(--text)',
				'foreground': 'var(--foreground)',
				'ground': 'var(--ground)',
				'background': 'var(--background)',
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'accent': 'var(--accent)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(600px at top left, var(--secondary), var(--background) 80%)',
			},
		},
	},
	plugins: [],
}
