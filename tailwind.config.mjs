/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				customGreen: '#6acfc7',
				customOro: '#bfa181',
				customGray: '#a3a3a3',
				customNoir: '#1d1715',
				customBlue: '#178582',
				customWhite: '#f1f1f1',
				customDarkGreen: '#0c1a1a',
				lightWhite: '#f1f3f5',
				lightYellow: '#f5df1a',
				darkWhite: '#eaeced'
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
