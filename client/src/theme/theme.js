import {extendTheme} from '@chakra-ui/react';

import Button from './components/ButtonTheme';
import colors from './colors';
import fonts from './fonts';
import breakpoints from './breakpoints';

// Override the default Chakra theme
const theme = extendTheme({
	breakpoints,
	colors,
	fonts,
	components: {
		Button
	}
});

export default theme;