import { Paper, Card } from "@mui/material";
import Form from "./Form";
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect } from "react";
import { cheerfulFiestaPaletteDark } from "@mui/x-charts";
import ExpenseHistory from "../expensesHistory/ExpenseHistory";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpenses } from "../../actions/expenseActions";
import { getPieChartData } from "../../actions/pieChartActions";


export default function Dashboard() {
    const dispatch = useDispatch();

    const expenses = useSelector((state) => state.expense.expenses);
    const pieChartData = useSelector((state) => state.pieChartData.data);

    useEffect(() => {
        dispatch(getAllExpenses());
        dispatch(getPieChartData());
    }, [dispatch]);


    return (
        <Card square={true} sx={{
            backgroundColor: '#1e1e1e',
            display: 'flex',
            // width: '100%',
            // alignItems: 'center',
            '@media (max-width: 900px)': {
                // flexDirection: 'column'
                flexWrap: 'wrap'
            },
            px: 0,
            py: 4,
            pl: 2,
            
        }}>
            {/* <Container maxWidth="xl" disableGutters="true" sx={{
                display: 'flex',
                py: 2

            }}> */}
            <Paper variant="elevation" elevation={5}  sx={{
                // height: '250px',
                // width: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 2,
                px: 6,
                mb: 2,
                background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a)',
                // backgroundColor: '#2a2a2a',
            }}>
              <Form />
            </Paper>
            <ExpenseHistory expenses={expenses}/>
            <Paper variant="elevation" elevation={5} square={true} sx={{
                // display: 'flex',
                // flexDirection: 'column',
                p: 2,
                height: '250px',
                mr:0,
                // backgroundColor: '#0d0d0d'
                background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a)',
                // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
                <PieChart
                    series={[
                        {
                            data: pieChartData,
                            highlightScope: { highlighted: 'item', faded: 'global' },
                        },
                    ]}
                    width={400}
                    height={200}
                    colors={cheerfulFiestaPaletteDark}
                />
            </Paper>
            {/* </Container> */}

        </Card>
    );
}