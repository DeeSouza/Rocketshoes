import React from 'react';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
	return (
		<Container>
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
					<tr>
						<td>
							<img
								src="https://static.netshoes.com.br/produtos/58/HZM-1880-058/HZM-1880-058_detalhe1.jpg?ims=326x"
								alt="Chuteira"
							/>
						</td>
						<td>
							<strong>Chuteira Top</strong>
							<span>R$ 129,90</span>
						</td>
						<td>
							<div>
								<button type="button">
									<MdRemoveCircleOutline
										size={20}
										color="#7159c1"
									/>
								</button>

								<input type="number" readOnly value={1} />

								<button type="button">
									<MdAddCircleOutline
										size={20}
										color="#7159c1"
									/>
								</button>
							</div>
						</td>
						<td>
							<strong>R$ 258,90</strong>
						</td>
						<td>
							<button>
								<MdDelete size={20} color="#7159c1" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar Pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>R$ 1.920,03</strong>
				</Total>
			</footer>
		</Container>
	);
}
