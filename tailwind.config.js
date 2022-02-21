module.exports = {
  content: [
      "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gitHub-black': '#171515',
        'linkedIn-blue': '#0077b5'
      },
      fontFamily: {
        arimo: ['Arimo']
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0%'},
          '100%': {opacity: '100%',},
        },
        blink: {
          '50%': {opacity: '0%'}
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        blink: 'blink 1s step-start infinite',
        arrowIn: 'fadeIn 0s ease-in-out 2s'
      }
    },
  },
  plugins: [],
}
