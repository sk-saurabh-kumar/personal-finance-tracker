import TextField from '@mui/material/TextField';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import InputAdornment from '@mui/material/InputAdornment';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import dayjs from 'dayjs';
import DescriptionIcon from '@mui/icons-material/Description';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../actions/expenseActions';


export default function Form() {
    const [form, setForm] = useState({
        description: '',
        amount: '',
        type: '',
        date: dayjs()
    });

    const [error, setError] = useState({
        description: '',
        amount: '',
        type: ''
    });

    const [isRequiredFieldsFilled, setIsRequiredFieldsFilled] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        let checkRequiredFiledsFilled = Object.entries(form)
            .filter(([key]) => key !== 'date')
            .every(([key, value]) => value !== '');

        let checkForErrors = Object.values(error).every(value => value === '');
        console.log('checkRequiredFieldsFilled ', checkRequiredFiledsFilled, ' checkForErrors ', checkForErrors);

        setIsRequiredFieldsFilled(checkRequiredFiledsFilled && checkForErrors);
    }, [form, error]);

    const types = ["Healthcare", "Food", "Housing", "EMI", "Shopping", "Utilities", "Transportation", "Personal Care", "Education",
        "Miscellaneous", "Entertainment"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value  // [] is used for computed property it is used to dynamically set key
        });
        setError({
            ...error,
            [name]: ''
        });
        console.log('form ', form);
    }

    const handleDateChange = (newDate) => {
        console.log(newDate);
        setForm({
            ...form,
            date: newDate,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(addExpense({
        //     id: Math.floor(Date.now() / 1000),
        //     amount: parseInt(form.amount, 10),
        //     description: form.description,
        //     type: form.type, 
        //     date: form.date
        // }));
        const payload = form;
        console.log('payload ',payload);
        // saveExpense(payload);
        dispatch(addExpense(payload));
        // console.log(form);
        setForm({
            description: '',
            amount: '',
            type: '',
            date: dayjs()
        });

    };

    const validateField = (name, value) => {
        let newError = { ...error };
        switch (name) {
            case "description":
                newError.description = !value ? "Description is required" : '';
                break;
            case "amount":
                if (!value) {
                    newError.amount = "Amount is required";
                    console.log('amount error value');
                }
                else if (/[a-zA-Z]/.test(value)) {
                    newError.amount = "Enter valid numbers";
                }
                else if (/[-]/.test(value)) {
                    newError.amount = "Amount can't be negative";
                }
                break;
            case "type":
                if (!value) {
                    newError.type = "Please select an expense type";
                }
                break;
            default:
                break;
        }
        console.log(newError);
        setError(newError);

    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        console.log('name and value before calling validateField ', name, value);
        validateField(name, value);
        console.log('Error ', error);
    }



    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <TextField
                    // required
                    id="Description"
                    name="description"
                    label="Description"
                    type="text"
                    value={form.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!error.description}
                    helperText={error.description}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            min: 0,
                        },
                        startAdornment: <InputAdornment position="start"><DescriptionIcon /></InputAdornment>,
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF5733'

                            }
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#FF5733',
                            }

                        },
                        width: '225px',
                        my: 2

                    }}
                />
                <TextField
                    required
                    id="Amount"
                    name="amount"
                    label="Amount"
                    type="number"
                    value={form.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!error.amount}
                    helperText={error.amount}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            min: 0,
                        },
                        startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF5733'

                            }
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#FF5733',
                            }

                        },
                        width: '225px'

                    }}
                />
                <TextField
                    id="Type"
                    name="type"
                    select
                    label="Type"
                    value={form.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!error.type}
                    helperText={error.type}
                    size="Large"
                    margin="normal"
                    InputProps={{
                        startAdornment: <InputAdornment position='start'><ReceiptLongOutlinedIcon /></InputAdornment>
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF5733'

                            }
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#FF5733',
                            }

                        },
                        width: '225px',
                    }}
                >
                    {types.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{
                    width: '225px'
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={form.date}
                                onChange={handleDateChange}
                                name="date"
                                label="Date"
                                defaultValue={dayjs()}
                                maxDate={dayjs()} sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FF5733'

                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        '&.Mui-focused': {
                                            color: '#FF5733'
                                        }
                                    }
                                }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                }}>
                    <Button variant="contained" type='submit' disabled={!isRequiredFieldsFilled} endIcon={<AddBoxIcon />} sx={{
                        backgroundColor: 'green',
                        ':hover': {
                            backgroundColor: '#ba3316',
                        },
                    }}>
                        Add Expense
                    </Button>
                </Box>
            </Box>
        </form>
    );
}
