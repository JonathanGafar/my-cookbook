import React from 'react';
import {Stack, Box, Button} from '@chakra-ui/react';

import HNavbar from '../components/HNavbar';

export default function Home() {
	const commonButtonProps = {
		size: {
			base: 'md',
			md: 'lg'
		},
		variant: 'generalButton'
	};

	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HNavbar />
			<Stack
				mt={{base: '8rem', md: '0'}}
				justify={{base: 'flexStart', md: 'center'}}
				align='center'
				direction={{base: 'column', md: 'row'}}
				h={{base: 'auto', md: '50%'}}
				w='100%'
				spacing={{base: '3rem', md: '6rem', lg: '7rem', xl: '8rem'}}
			>
				<Button {...commonButtonProps}>
					Sign up
				</Button>
				<Button {...commonButtonProps}>
					Log in
				</Button>
				<Button {...commonButtonProps}>
					Log in as guest
				</Button>
			</Stack>
		</Box>
	);
}