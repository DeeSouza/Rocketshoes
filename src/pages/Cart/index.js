import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
	MdShoppingCart,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, NoCart } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
	function increment(product) {
		updateAmountRequest(product.id, product.amount + 1);
	}

	function decrement(product) {
		updateAmountRequest(product.id, product.amount - 1);
	}

	return (
		<Container>
			{cart.length === 0 && (
				<NoCart>
					Que pena, seu carrinho ainda está vazio.
					<MdShoppingCart color="#FFF" size={100} />
				</NoCart>
			)}
			{cart.length > 0 && (
				<ProductTable>
					<thead>
						<tr>
							<th />
							<th>PRODUTO</th>
							<th>QTD</th>
							<th />
							<th>SUBTOTAL</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{cart.map(product => (
							<tr key={product.id}>
								<td>
									<img
										src={product.image}
										alt={product.title}
									/>
								</td>
								<td>
									<strong>{product.title}</strong>
									<span>{product.priceFormatted}</span>
								</td>
								<td>
									<div>
										<button
											type="button"
											onClick={() => decrement(product)}
										>
											<MdRemoveCircleOutline
												size={20}
												color="#7159c1"
											/>
										</button>

										<input
											type="number"
											readOnly
											value={product.amount}
										/>

										<button
											type="button"
											onClick={() => increment(product)}
										>
											<MdAddCircleOutline
												size={20}
												color="#7159c1"
											/>
										</button>
									</div>
								</td>
								<td>
									<strong>{product.subtotal}</strong>
								</td>
								<td>
									<button
										type="button"
										onClick={() =>
											removeFromCart(product.id)
										}
									>
										<MdDelete size={20} color="#7159c1" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</ProductTable>
			)}

			<footer>
				{cart.length > 0 && (
					<button type="button" className="done">
						Finalizar Pedido
					</button>
				)}

				<Link to="/">
					<button type="button" className="buying">
						Continuar Comprando
					</button>
				</Link>

				<Total>
					<span>TOTAL</span>
					<strong>{total}</strong>
				</Total>
			</footer>
		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart.map(product => ({
		...product,
		subtotal: formatPrice(product.price * product.amount),
	})),
	total: formatPrice(
		state.cart.reduce((total, product) => {
			return total + product.price * product.amount;
		}, 0)
	),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(CartActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

Cart.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			amount: PropTypes.number,
			title: PropTypes.string,
			priceFormmated: PropTypes.string,
			image: PropTypes.string,
		})
	).isRequired,
	removeFromCart: PropTypes.func.isRequired,
	updateAmountRequest: PropTypes.func.isRequired,
	total: PropTypes.string.isRequired,
};
