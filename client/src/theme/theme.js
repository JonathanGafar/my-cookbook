import {extendTheme} from '@chakra-ui/react';
import breakpoints from './breakpoints';

// Override the default Chakra theme
const theme = extendTheme({breakpoints});

export default theme;