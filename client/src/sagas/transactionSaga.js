import { put } from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes'
import * as restController from '../api/http/restController';

export function* getHistorySaga(action) {
    try {
        const { data: { data } } = yield restController.getTransactionHistory()
        yield put({ type: ACTIONS.GET_TRANSACTION_INFO_SUCCESS, data: data })
    } catch (err) {
        yield put({ type: ACTIONS.GET_TRANSACTION_INFO_ERROR, error: err.response })
    }
}
