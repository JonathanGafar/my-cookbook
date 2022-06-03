// Font file
import '@fontsource/rubik/400.css';

// Default styles for buttons
const buttonBaseTheme = {
	baseStyle: {
		  fontWeight: '100'
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
		size: {
			base: 'sm',
			md: 'md'
		}
	}
};

export default buttonBaseTheme;