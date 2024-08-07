import TextField from '@mui/material/TextField';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/material';
import { useState } from 'react';
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


export default function Form({ addExpense }) {
    const [form, setForm] = useState({
        description: '',
        amount: '',
        type: '',
        date: dayjs()
    });

    const types = ["Health Care", "Food", "House Rent", "EMI", "Shopping"];

    const setAmount = (e) => {
        setForm({
            ...form,
            amount: e.target.value !== '' ? parseInt(e.target.value, 10) : '',
        });
    };

    const handleTypeChange = (e) => {
        setForm({
            ...form,
            type: e.target.value,
        })
    };

    const handleDescriptionChange = (e) => {
        setForm({
            ...form,
            description: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ id: Math.floor(Date.now() / 1000), amount: form.amount, description: form.description, type: form.type, date: form.date });
        console.log(form);
        setForm({
            description: '',
            amount: '',
            type: '',
            date: dayjs()
        });
    };

    const handleDateChange = (newDate) => {
        console.log(newDate);
        setForm({
            ...form,
            date: newDate,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <TextField
                    required
                    id="outlined-number"
                    label="Description"
                    type="text"
                    value={form.description}
                    onChange={handleDescriptionChange}
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
                    id="outlined-number"
                    label="Amount"
                    type="number"
                    value={form.amount}
                    onChange={setAmount}
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
                    id="outlined-select-type"
                    select
                    label="Type"
                    value={form.type}
                    onChange={handleTypeChange}
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
                    <Button variant="contained" type='submit' endIcon={<AddBoxIcon />} sx={{
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
