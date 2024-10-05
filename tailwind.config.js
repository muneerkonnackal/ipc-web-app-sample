/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true,
		padding:"15px"
	},
	screens:{
		sm:'640px',
		md:'768px',
		lg:"960px",
		xl:'1200px'
	},
	fontFamily:{
		primary:"var(--font-geist-mono)"
	},
  	extend: {
		backgroundImage: {
			'mybgimg': "url('/bgmap.webp')", 
			blackOverlay: "radial-gradient(circle, rgba(11,2,103,0.8543066884957108) 0%, rgba(3,3,93,0.833066884957108) 31%)"
		  },
  		colors: {
  			primary: '#1c1c22',
			customYellow: '#FFC136',
			aboutbg: '#E7E7E7',
			accent:{
				DEFAULT: '#101F46',
				hover:'#00e187'
			}
  		},
		
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
