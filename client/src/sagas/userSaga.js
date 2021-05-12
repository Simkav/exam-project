import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {user} from '../api/http';

export  function* updateUserData(action){
    try{
        const {data}=yield user.updateUser(action.data);
        yield put({type: ACTION.UPDATE_USER_DATA_SUCCESS,user: data});
        yield put({type: ACTION.CHANGE_EDIT_MODE_ON_USER_PROFILE,data: false});
    }
    catch (e) {
        yield  put({type: ACTION.UPDATE_USER_DATA_ERROR, error: e.response});
    }
}
