import axiosInstance from "./axios"

export const saveExpense = async (payload) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },    
        };
        console.log('Payload before calling post API', payload);
        const res = await axiosInstance.post('/api/expenses', payload, config);
        console.log(res);
        return res;
    }
    catch(err) {
        console.error('saveExpenses Error', err);
        throw err;
    }   
}

export const getExpenses = async () => {
    try{
        const res = await axiosInstance.get('/api/expenses');
        console.log(res);
        return res;
    }
    catch(err) {
        console.error('getExpenses Error', err);
        throw err;
    }
}