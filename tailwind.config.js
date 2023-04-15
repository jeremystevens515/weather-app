/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				'dark': '#4A5E75',
				'bluish': '#63778D'
			},
			fontFamily: {
				'sans': ['Quando']
			}
		},
	},
	plugins: [require("daisyui")],
};
