import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

// Custom breakpoints for media queries
const breakpoints = {
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	'2xl': '1400px'
};

// Override the default Chakra theme
const theme = extendTheme({breakpoints});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();