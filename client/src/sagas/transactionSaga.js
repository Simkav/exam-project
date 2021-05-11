import { put } from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes'
import {user} from '../api/http';

export function* getHistorySaga(action) {
    try {
        const { data: { data } } = yield user.getTransactionHistory()
        yield put({ type: ACTIONS.GET_TRANSACTION_INFO_SUCCESS, data: data })
    } catch (err) {
        yield put({ type: ACTIONS.GET_TRANSACTION_INFO_ERROR, error: err.response })
    }
}
