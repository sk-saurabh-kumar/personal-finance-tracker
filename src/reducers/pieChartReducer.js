import { GET_PIECHART_DATA_FAILURE, GET_PIECHART_DATA_REQUEST, GET_PIECHART_DATA_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export const pieChartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PIECHART_DATA_REQUEST:
            return({
                ...state,
                loading: true,
            });
        case GET_PIECHART_DATA_SUCCESS:
            return({
                ...state,
                loading: false,
                data: action.payload
            });
        case GET_PIECHART_DATA_FAILURE:
            return({
                ...state,
                loading: false,
                error: action.payload
            }); 
        default:
            return state;           
    }

}