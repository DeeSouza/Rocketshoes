import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 50px 0px;
`;

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: opacity 0.2s;
	position: relative;

	&:hover {
		.float-cart {
			opacity: 1;
			top: 50px;
			visibility: visible;
		}
	}

	> div.info {
		text-align: right;
		margin-right: 10px;

		strong {
			display: block;
			color: #fff;
		}

		span {
			font-size: 12px;
			color: #999;
		}
	}
`;
