// Font file
import '@fontsource/rubik/400.css';

// Default styles for buttons
const buttonBaseTheme = {
	baseStyle: {
		  fontWeight: '600',
		  fontFamily: 'Rubik, Arial Serif'
	},
	sizes: {
		lg: {
			fontSize: '1.125rem'
		}
	},
	variants: {
		solid: {
			bg: 'buttonColor',
			color: 'white',
			_hover: {
				opacity: '0.7',
				bg: '#037888'
			},
			_active: {
				bg: '#037888'
			}
		}
	},
	defaultProps: {
		size: 'lg'
	}
};

// Default button color
const buttonColors = {
	buttonColor: '#037888'
};

// Button outline for when a button is active or focused
const buttonShadows = {
	outline: '0 0 0 3px rgb(6, 176, 199)'
};

export {buttonBaseTheme, buttonColors, buttonShadows};