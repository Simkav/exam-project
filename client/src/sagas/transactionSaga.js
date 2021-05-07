import { put } from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes'
import * as restController from '../api/rest/restController';

export function* getHistorySaga(action) {
    try {
        const { data: { data } } = yield restController.getTransactionHistory()
        yield put({ type: ACTIONS.GET_TRANSACTION_HISTORY_SUCCESS, data: data })
    } catch (err) {
        yield put({ type: ACTIONS.GET_TRANSACTION_HISTORY_ERROR, error: err.response })
    }
}