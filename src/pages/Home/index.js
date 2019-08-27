import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
	return (
		<ProductList>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
					alt="Tênis"
				/>

				<strong>Chuteira Top</strong>
				<span>R$ 129,90</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#FFF" /> 3
					</div>

					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
		</ProductList>
	);
}
