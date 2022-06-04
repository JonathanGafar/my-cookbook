import {extendTheme} from '@chakra-ui/react';

// Button theme objects
import Button from './components/ButtonTheme';
import colors from './colors';
import fonts from './fonts';

// Override the default Chakra theme
const theme = extendTheme({
	colors,
	fonts,
	components: {
		Button
	}
});

export default theme;