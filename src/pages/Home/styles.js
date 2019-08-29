import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.div`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;

	li {
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 4px;
		padding: 20px;

		img {
			align-self: center;
			max-width: 250px;
		}

		> strong {
			font-size: 16px;
			line-height: 20px;
			color: #333;
			margin-top: 5px;
		}

		> span {
			font-size: 21px;
			font-weight: bold;
			margin: 5px 0px 20px;
		}

		button {
			background: #7159c1;
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;

			display: flex;
			align-items: center;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.1, '#7159c1')};
			}

			div {
				display: flex;
				align-items: center;
				padding: 12px;
				background-color: rgba(0, 0, 0, 0.1);

				svg {
					margin-right: 5px;
				}
			}

			span {
				flex: 1;
				text-align: center;
				font-weight: bolder;
			}
		}
	}
`;

export const NoProducts = styled.div`
	color: #fff;
	font-size: 16px;
	background-color: #333;
	padding: 10px 15px;
	border-radius: 4px;
	display: flex;
	align-items: center;

	svg {
		margin-right: 10px;
	}
`;

export const Loading = styled.div`
	width: 40px;
	height: 40px;

	position: relative;
	margin: 100px auto;

	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #333;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: sk-bounce 2s infinite ease-in-out;
	}

	.double-bounce2 {
		animation-delay: -1s;
	}

	@keyframes sk-bounce {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
`;
