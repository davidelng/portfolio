/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'aurora-gradient': "radial-gradient(at 93% 45%, hsla(18,100%,84%,0.15) 0px, transparent 50%),radial-gradient(at 40% 20%, hsla(33,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(9,48%,83%,0.43) 0px, transparent 50%)"
			},
			backgroundColor: {
				'aurora-base': "hsla(33,100%,96%,1)"
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
