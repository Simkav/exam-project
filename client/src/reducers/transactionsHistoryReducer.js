import ACTIONS from '../actions/actionTypes';


const initialState = {
    isFetching: false,
    error: null,
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_TRANSACTION_HISTORY_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ACTIONS.GET_TRANSACTION_HISTORY_SUCCESS: {
            return {
                ...state,
                error: null,
                isFetching: false,
                data: action.data.history
            }
        }
        case ACTIONS.GET_TRANSACTION_HISTORY_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state

    }
}