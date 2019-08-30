import styled from 'styled-components';

export const Container = styled.div.attrs({
	className: 'float-cart',
})`
	opacity: 0;
	visibility: hidden;
	margin-top: 0;
	background-color: #fff;
	height: auto;
	max-height: 400px;
	width: 400px;
	position: absolute;
	top: 100px;
	right: 0;
	border-radius: 4px;
	z-index: 1;
	box-shadow: 0px 0px 12px -8px #0e0e0e;
	transition: all 0.25s ease-in-out;

	&:before {
		content: '';
		width: 0px;
		height: 0px;
		border-color: transparent transparent #fff transparent;
		border-style: solid;
		position: absolute;
		border-width: 10px 10px 10px 10px;
		right: 8px;
		top: -20px;
	}
`;

export const ProductList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	overflow: auto;
	max-height: 350px;
	height: auto;

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

	li {
		margin-bottom: 10px;
		height: 80px;
		border-bottom: 1px solid #eee;

		&:last-child {
			margin-bottom: 0px;
		}

		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 80px;
			padding: 0px 15px;

			img {
				width: 64px;
			}

			strong {
				font-size: 14px;
				width: 200px;
				justify-self: flex-start;
				margin-left: 20px;
				margin-right: auto;
				text-decoration: none;
				color: #ff5722;
			}

			span {
				text-decoration: none;
				color: #333;
				font-weight: bold;
			}
		}
	}
`;
