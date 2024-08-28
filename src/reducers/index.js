import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";
import { pieChartReducer } from "./pieChartReducer";

const rootReducer = combineReducers({
    expense: expenseReducer,
    pieChartData: pieChartReducer
});

export default rootReducer;