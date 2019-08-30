import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Container, ProductList } from './styles';

function FloatCart({ cart }) {
	return (
		<Container>
			<ProductList>
				{cart.map(product => (
					<li key={product.id}>
						<div>
							<img src={product.image} alt={product.title} />
							<strong>{product.title}</strong>
							<span>{product.priceFormatted}</span>
						</div>
					</li>
				))}
			</ProductList>
		</Container>
	);
}

FloatCart.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.Number,
			title: PropTypes.String,
		})
	).isRequired,
};

export default connect(state => ({
	cart: state.cart,
}))(FloatCart);
