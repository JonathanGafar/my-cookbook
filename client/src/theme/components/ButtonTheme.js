// Default styles for buttons
const buttonBaseTheme = {
	baseStyle: {
		  fontWeight: '100'
	},
	variants: {
		solid: {
			color: 'white',
			_hover: {
				opacity: '0.7'
			},
			_active: {
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