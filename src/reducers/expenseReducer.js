import { ADD_EXPENSE_FAILURE, ADD_EXPENSE_REQUEST, ADD_EXPENSE_SUCCESS, GET_EXPENSES_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    expenses: [],
    error: null,
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE_REQUEST:
            return ({
                ...state,
                loading: true,
            });
        case ADD_EXPENSE_SUCCESS:
            return ({
                ...state,
                loading: false,
                expenses: [...state.expenses, action.payload],
            });
        case ADD_EXPENSE_FAILURE:
            return ({
                ...state,
                loading: false,
                error: action.payload,
            });
        case GET_EXPENSES_SUCCESS:
            return ({
                ...state,
                loading: false,
                expenses: action.payload,
            });        
        default:
            return state;
    }
}

export default expenseReducer;