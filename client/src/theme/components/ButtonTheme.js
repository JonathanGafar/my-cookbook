// Default styles for buttons
const buttonBaseTheme = {
	baseStyle: {
		  fontWeight: '100'
	},
	variants: {
		generalButton: {
			bg: 'buttonColor',
			color: 'white',
			w: 'fit-content',
			_hover: {
				opacity: '0.7'
			},
			_active: {
				opacity: '0.7'
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