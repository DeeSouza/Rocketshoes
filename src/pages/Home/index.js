import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart, MdInfo } from 'react-icons/md';
import PropTypes from 'prop-types';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import { ProductList, NoProducts, Loading } from './styles';

class Home extends Component {
	state = {
		products: [],
		loading: true,
	};

	async componentDidMount() {
		const response = await api.get('products');

		const data = response.data.map(product => ({
			...product,
			priceFormatted: formatPrice(product.price),
		}));

		this.setState({
			products: data,
			loading: false,
		});
	}

	handleAddProduct = id => {
		const { addToCartRequest } = this.props;

		addToCartRequest(id);
	};

	render() {
		const { products, loading } = this.state;
		const { amount } = this.props;

		return (
			<>
				<ProductList>
					{products.map(product => (
						<li key={product.id}>
							<img src={product.image} alt={product.title} />

							<strong>{product.title}</strong>
							<span>{product.priceFormatted}</span>

							<button
								type="button"
								onClick={() =>
									this.handleAddProduct(product.id)
								}
							>
								<div>
									<MdAddShoppingCart size={16} color="#FFF" />{' '}
									{amount[product.id] || 0}
								</div>

								<span>ADICIONAR AO CARRINHO</span>
							</button>
						</li>
					))}
				</ProductList>

				{!loading && products.length === 0 && (
					<NoProducts>
						<MdInfo size={25} color="#FFF" />
						Que pena, vendemos todo nosso estoque!
					</NoProducts>
				)}

				{loading && (
					<Loading>
						<div className="double-bounce1" />
						<div className="double-bounce2" />
					</Loading>
				)}
			</>
		);
	}
}
const mapStateToProps = state => ({
	amount: state.cart.reduce((amount, product) => {
		amount[product.id] = product.amount;

		return amount;
	}, {}),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(CartActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

Home.propTypes = {
	addToCartRequest: PropTypes.func.isRequired,
	amount: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
		.isRequired,
};
