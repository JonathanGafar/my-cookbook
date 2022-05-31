import {extendTheme} from '@chakra-ui/react';

// Button theme objects
import {
	buttonBaseTheme as Button,
	buttonColors as colors,
	buttonShadows as shadows
} from './components/ButtonTheme';

// Override the default Chakra theme
const theme = extendTheme({
	colors,
	shadows,
	components: {
		Button
	}
});

export default theme;