import React from 'react';
import {Grid, GridItem} from '@chakra-ui/react';

import VNavbar from '../shared/VNavbar';

export default function LoggedIn() {
	return (
		<Grid
			h='100vh'
			templateRows='5rem auto'
			templateColumns='16rem auto'
		>
			<GridItem colStart='1' colEnd='2' rowStart='1' rowEnd='-1'>
				<VNavbar />
			</GridItem>
			<GridItem bg='green' colStart='2' colEnd='-1' rowStart='1' rowEnd='2'>
			</GridItem>
			<GridItem bg='blue' colStart='2' colEnd='-1' rowStart='2' rowEnd='-1'>
			</GridItem>
		</Grid>
	);
}