import { IconButton, Paper, Typography, Card } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Form from "./Form";
import { useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect } from "react";
import { cheerfulFiestaPaletteDark } from "@mui/x-charts";
import ExpenseHistory from "../ExpensesHistory/ExpenseHistory";


export default function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);

    const handleNewExpense = (newExpense) => {
        setExpenses([
            ...expenses,
            newExpense
        ]);
        console.log("Expenses before adding new expense", expenses);
        addNewExpenseToChart(newExpense);
    };

    const findMaxIdPresent = (pieChartData) => {
        if (pieChartData.size === 0) {
            return null;
        }
        return pieChartData.reduce((maxId, data) => {
            return data.id > maxId ? data.id : maxId
        }, 0);
    }

    const addNewExpenseToChart = (newExpense) => {
        let olderExpenseWithSameType = pieChartData.find((data) => data.label === newExpense.type);
        // console.log('Older expense with same type ', olderExpenseWithSameType);

        let id, olderExpenseAmount = 0;
        if (olderExpenseWithSameType === undefined) {
            id = findMaxIdPresent(pieChartData);
            id === null ? id = 0 : id++;
            console.log('New id will be ', id);
        }
        else {
            olderExpenseAmount = olderExpenseWithSameType.value;
            id = olderExpenseWithSameType.id;
        }

        setPieChartData([
            ...pieChartData.filter((expense) => expense.label !== newExpense.type),
            { id: id, value: olderExpenseAmount + newExpense.amount, label: newExpense.type }
        ]);
    }

    useEffect(() => {
        console.log('Expense after adding new expense', expenses);
        console.log('Pie Chart data after add new expense ', pieChartData);
    }, [expenses, pieChartData]);


    return (
        <Card square={true} sx={{
            backgroundColor: '#1e1e1e',
            display: 'flex',
            width: '100%',
            // alignItems: 'center',
            '@media (max-width: 900px)': {
                // flexDirection: 'column'
                flexWrap: 'wrap'
            },
            px: 0
        }}>
            <Paper variant="elevation" elevation={5} square={true} sx={{
                // height: '250px',
                // width: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 2,
                px: 6,
                mb: 2
            }}>
                {/* <IconButton size="large">
                    <AddBoxIcon />
                </IconButton>
                <Typography variant="h5">ADD</Typography> */}
                <Form addExpense={handleNewExpense} />
            </Paper>
            <ExpenseHistory expenses={expenses}/>
            <Paper variant="elevation" elevation={5} square={true} sx={{
                // display: 'flex',
                // flexDirection: 'column',
                p: 2,
                height: '250px',
                mr:0,
                backgroundColor: '#121212'
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

        </Card>
    );
}