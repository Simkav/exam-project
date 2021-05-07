import ACTIONS from '../actions/actionTypes';


const initialState = {
    isFetching: false,
    error: null,
    data: [],
    totalFlow: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_TRANSACTION_INFO_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ACTIONS.GET_TRANSACTION_INFO_SUCCESS: {
            return {
                ...state,
                error: null,
                isFetching: false,
                data: action.data.history,
                totalFlow: action.data.flow
            }
        }
        case ACTIONS.GET_TRANSACTION_INFO_ERROR: {
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