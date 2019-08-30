import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body{
		background: #191920 url(${background}) no-repeat center top;
		-webkit-font-smoothing: antialiased;

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		}

		&::-webkit-scrollbar-thumb {
			background-color: darkgrey;
			outline: 1px solid slategrey;
		}
	}

	body, input, button{
		font: 14px 'Roboto', sans-serif;
	}

	#root{
		max-width: 1020px;
		margin: 0 auto;
		padding: 0px 20px 50px;
	}

	button{
		cursor: pointer;
	}
`;
