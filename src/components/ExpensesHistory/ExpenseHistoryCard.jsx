import { Card, CardContent, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import { amber } from '@mui/material/colors';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';



const ExpenseHistoryCard = ({ expense }) => {
    const iconStyles = {
        fontSize: '24px',
        pr: 1
    }

    const getIcon = (type) => {
        let icon;
        switch (type) {
            case "Healthcare":
                icon = <LocalHospitalIcon sx={iconStyles}/>
                break;
            case "Food":
                icon = <FastfoodIcon sx={iconStyles}/>
                break;
            case "Housing":
                icon = <HomeRoundedIcon sx={iconStyles}/>
                break;
            case "EMI":
                icon = <CreditCardRoundedIcon sx={iconStyles}/>
                break;
            case "Shopping":
                icon = <ShoppingCartRoundedIcon sx={iconStyles}/>
                break;
            case "Utilities":
                icon = <BoltRoundedIcon sx={iconStyles}/>
                break;
            case "Transportation":
                icon = <DirectionsCarRoundedIcon sx={iconStyles}/>
                break;
            case "Personal Care":
                icon = <SpaRoundedIcon sx={iconStyles}/>
                break;
            case "Education":
                icon = <SchoolRoundedIcon sx={iconStyles}/>
                break;
            case "Miscellaneous":
                icon = <CategoryRoundedIcon sx={iconStyles}/>
                break;
            case "Entertainment":
                icon = <MovieCreationRoundedIcon sx={iconStyles}/>
                break;
            default:
                break;
        }
        console.log('Icon ', icon);
        return icon;
    }

    const icon = getIcon(expense.type);



    return (
        <Grid item variant="elevation" sx={{
            // width: '100px',
            // flex: '1 1 135px',
            // height: '135px'
            // minWidth: '135px'
        }}>
            <Card elevation={4} sx={{
                // width: '135px',
                // flex: '1 1 135px',
                // height: '135px',
                width: '200px',
                background: 'linear-gradient(135deg, #D32F2F, #FF5252)',
                color: '#fff;',
                p: 0,
                // boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
            }}>
                <CardContent sx={{
                    // pt: 1,
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // p: 1,
                        // pt: 1,
                        color: '#fff;',
                        fontWeight: '625',
                    }}>
                        {/* <ShoppingCartIcon sx={{
                            // color: 'black',
                            fontSize: '24px',
                            pr: 1
                        }} /> */}
                        {icon}
                        <Typography variant="h6" component="p" sx={{
                            fontSize: '18px'
                        }}>{expense.type}</Typography>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 1,
                    }}>
                        <CurrencyRupeeIcon sx={{
                            pr: 0,
                            fontSize: '22px'
                        }} />
                        <Typography variant="body2" component="p" sx={{
                            fontSize: '15px'
                        }}>{expense.amount}</Typography>
                        {/* <Typography>{expense.description}</Typography> */}
                    </Box>
                    <Typography sx={{
                        fontSize: '12px',
                        color: '#e0e0e0',
                        mt: 1,
                    }}>
                        {expense.description}
                    </Typography>

                </CardContent>


                {/* <Typography>Date: {expense.date.toString()}</Typography> */}

            </Card>

        </Grid>

    );
}

export default ExpenseHistoryCard;