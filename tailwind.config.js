/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#451da0',
  			secondary: '#8b5cf6',
			highlight:"#2c95ff"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		container:{
			padding:0
		}
  	},
  	container: {
  		center: true,
  		padding: '2rem'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
