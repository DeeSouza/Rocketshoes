import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	padding: 30px;
	background-color: #fff;
	border-radius: 4px;

	footer {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			color: #fff;
			border: 0;
			border-radius: 4px;
			padding: 12px 20px;
			font-weight: bold;
			text-transform: uppercase;
			transition: background 0.2s;

			&.done {
				margin-right: 10px;
				background: #7159c1;

				&:hover {
					background: ${darken(0.3, '#7159c1')};
				}
			}

			&.buying {
				background: #ff5722;

				&:hover {
					background: ${darken(0.3, '#FF5722')};
				}
			}
		}
	}
`;

export const ProductTable = styled.table`
	width: 100%;

	thead th {
		color: #999;
		text-align: left;
		padding: 12px;
	}

	tbody td {
		padding: 12px;
		border-bottom: 1px solid #eee;
	}

	img {
		height: 100px;
	}

	strong {
		color: #333;
		display: block;
	}

	span {
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
		display: block;
	}

	div {
		display: flex;
		align-items: center;

		input {
			border: 1px solid #ddd;
			border-radius: 4px;
			color: #666;
			padding: 6px;
			width: 50px;
		}
	}

	button {
		background: none;
		border: 0;
		padding: 6px;
	}
`;

export const Total = styled.div`
	display: flex;
	align-items: baseline;
	align-self: flex-end;
	margin-left: auto;

	span {
		color: #999;
		font-weight: bold;
	}

	strong {
		font-size: 28px;
		margin-left: 5px;
	}
`;

export const NoCart = styled.div`
	color: #fff;
	font-size: 16px;
	background-color: #333;
	padding: 20px 15px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	svg {
		margin-top: 20px;
	}
`;
