import { getData } from "../api/pieChartApi";
import { GET_PIECHART_DATA_FAILURE, GET_PIECHART_DATA_REQUEST, GET_PIECHART_DATA_SUCCESS } from "./types"

export const getPieChartData = () => {
    return async(dispatch) => {
        dispatch({type: GET_PIECHART_DATA_REQUEST});

        try{
            const res = await getData();
            dispatch({
                type: GET_PIECHART_DATA_SUCCESS,
                payload: res.data,
            });
        }
        catch(err) {
            dispatch({
                type: GET_PIECHART_DATA_FAILURE,
                payload: err,
            });
        }
    }
}