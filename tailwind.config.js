const colors = require('tailwindcss/colors')
 
module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: true,
	theme: {
		colors: {
			white: colors.white,
			gray: colors.stone,
			'svelte-prime': '#ff5030',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}