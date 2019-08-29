import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

/**
 * Funcionalidade do JS (Generator)
 * Async/Await (Basicamente)
 */
function* addToCart({ id }) {
	// Como se fosse o await
	const response = yield call(api.get, `/products/${id}`);

	// PUT dispara actions
	yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

// TakeLatest usa a última chamada
// TakeEvery chama todas as vezes
