import axiosInstance from "./axios"

export const getData = async () => {
    try{
        const res = await axiosInstance.get('/api/pieChartData');
        return res;
    }
    catch(err) {
        throw err;
    }

}