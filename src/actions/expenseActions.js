import { saveExpense, getExpenses } from "../api/expenseApi";
import { getPieChartData } from "./pieChartActions";
import { ADD_EXPENSE_FAILURE, ADD_EXPENSE_REQUEST, ADD_EXPENSE_SUCCESS, GET_EXPENSES_FAILURE, GET_EXPENSES_REQUEST, GET_EXPENSES_SUCCESS } from "./types"

export const addExpense = (expense) => {
    return async (dispatch) => {
        dispatch({type: ADD_EXPENSE_REQUEST});
        try{
            const response = await saveExpense(expense);
            dispatch({
                type: ADD_EXPENSE_SUCCESS, 
                payload: response.data
            });
            dispatch(getPieChartData());
        }
        catch(err) {
            dispatch({
                type: ADD_EXPENSE_FAILURE, 
                payload: err.response.data,
            });
        }
    }
};

export const getAllExpenses = () => {
    return async (dispatch) => {
        dispatch({type: GET_EXPENSES_REQUEST});
        try {
            const res = await getExpenses();
            dispatch({
                type: GET_EXPENSES_SUCCESS,
                payload: res.data,
            });
        }
        catch(err) {
            dispatch({
                type: GET_EXPENSES_FAILURE,
                payload: err.response.data,
            });
        }
    }
}
