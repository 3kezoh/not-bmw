/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			backgroundImage: {
				nav: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.42) 61%, rgba(0, 0, 0, 0.31) 78%, transparent)"
			},
			dropShadow: {
				nav: "0 0 3px #000000e6"
			},
			colors: {
				"chinese-silver": "#cacaca",
				cultured: "#f6f6f6",
				"honolulu-blue": "#0066b1",
				nickel: "#727171",
				"raisin-black": "#221f1f"
			},
			height: {
				"d-screen": "100dvh"
			},
			maxHeight: {
				"d-screen": "100dvh"
			},
			strokeWidth: {
				4: "4px"
			},
			textUnderlineOffset: {
				6: "6px"
			}
		}
	},
	plugins: []
};
