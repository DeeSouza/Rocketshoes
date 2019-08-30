import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

import FloatCart from '../FloatCart';

function Header({ cartSize }) {
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

export default connect(state => ({
	cartSize: state.cart.length,
}))(Header);
