import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart, MdInfo } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import { ProductList, NoProducts, Loading } from './styles';

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState(0);

	const amount = useSelector(state =>
		state.cart.reduce((amountProduct, product) => {
			amountProduct[product.id] = product.amount;

			return amountProduct;
		}, {})
	);

	const loadingAmount = useSelector(state =>
		state.cart.reduce((loadAmount, product) => {
			loadAmount[product.id] = product.loadingAmount || false;

			return loadAmount;
		}, {})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		async function loadProducts() {
			const response = await api.get('products');

			const data = response.data.map(product => ({
				...product,
				priceFormatted: formatPrice(product.price),
				loadingAmount: true,
			}));

			setProducts(data);
			setLoading(false);
		}

		loadProducts();
	}, []); // [] = Executa apenas uma vez

	function handleAddProduct(idProduct) {
		setId(idProduct);

		dispatch(CartActions.addToCartRequest(idProduct));
	}

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
							onClick={() => handleAddProduct(product.id)}
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
									<MdAddShoppingCart size={16} color="#FFF" />
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
