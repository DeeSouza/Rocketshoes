import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

import FloatCart from '../FloatCart';

export default function Header() {
	const cartSize = useSelector(state => state.cart.length);

	return (
		<Container>
			<Link to="/">
				<img src={Logo} alt="RocketShoes" />
			</Link>

			<Cart to="/cart">
				<div className="info">
					<strong>Meu Carrinho</strong>
					<span>{cartSize} itens</span>
				</div>

				<MdShoppingBasket size={36} color="#FFF" />

				{cartSize > 0 && <FloatCart />}
			</Cart>
		</Container>
	);
}

Header.propTypes = {
	cartSize: PropTypes.number.isRequired,
};
