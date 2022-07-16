import React from 'react';
import {Stack, Box, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

import HLogoBar from '../components/HLogoBar';
import {useAuthentication} from '../customHooks';

export default function Home() {
	const isLoggedIn = useAuthentication();

	const commonButtonProps = {
		size: {
			base: 'md',
			md: 'lg'
		},
		variant: 'generalButton'
	};

	return (
		<>
			{!isLoggedIn && <Box
				h='100vh'
				bg='pageBackgroundColor'
			>
				<HLogoBar />
				<Stack
					mt={{base: '8rem', md: '0'}}
					justify={{base: 'flexStart', md: 'center'}}
					align='center'
					direction={{base: 'column', md: 'row'}}
					h={{base: 'auto', md: '50%'}}
					w='100%'
					spacing={{base: '3rem', md: '6rem', lg: '7rem', xl: '8rem'}}
				>
					<Link to='/signup'>
						<Button {...commonButtonProps}>
						Sign up
						</Button>
					</Link>
					<Link to='login'>
						<Button {...commonButtonProps}>
					Log in
						</Button>
					</Link>
					<Button {...commonButtonProps}>
					Log in as guest
					</Button>
				</Stack>
			</Box>}
		</>
	);
}