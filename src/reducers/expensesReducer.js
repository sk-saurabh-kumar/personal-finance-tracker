import { ADD_EXPENSE } from "../actions/types";

const initialState = [];

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return ([
                ...state,
                action.payload,
            ]);
        default:
            return state;
    }
}

export default expensesReducer;