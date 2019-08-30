import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart, MdInfo } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import { ProductList, NoProducts, Loading } from './styles';

class Home extends Component {
	state = {
		products: [],
		loading: true,
		id: 0,
	};

	async componentDidMount() {
		const response = await api.get('products');

		const data = response.data.map(product => ({
			...product,
			priceFormatted: formatPrice(product.price),
			loadingAmount: true,
		}));

		this.setState({
			products: data,
			loading: false,
		});
	}

	handleAddProduct = id => {
		const { addToCartRequest } = this.props;

		this.setState({ id });

		addToCartRequest(id);
	};

	render() {
		const { products, loading, id } = this.state;
		const { amount, loadingAmount } = this.props;

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
									{!loadingAmount[product.id] &&
									id === product.id ? (
										<FaSpinner
											className="spin"
											color="#FFF"
											size={16}
										/>
									) : (
										<MdAddShoppingCart
											size={16}
											color="#FFF"
										/>
									)}{' '}
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

const mapStateToProps = state => {
	return {
		amount: state.cart.reduce((amount, product) => {
			amount[product.id] = product.amount;

			return amount;
		}, {}),
		loadingAmount: state.cart.reduce((loadingAmount, product) => {
			loadingAmount[product.id] = product.loadingAmount || false;

			return loadingAmount;
		}, {}),
	};
};

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
	loadingAmount: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
		.isRequired,
};
