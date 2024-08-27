import { Container, Grid, Typography } from "@mui/material";
import ExpenseHistoryCard from "./ExpenseHistoryCard";

export default function ExpenseHistory({ expenses }) {

    const sortedExpenses = expenses.slice() //creating a shallow copy of expenes make sure sort() doesn't mutate the original array
                                   .sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log('Sorted Expense ', sortedExpenses);


    return (
        <Container>
            <Typography sx={{
                p: 2,
            }}>
                Last 10 expenses
            </Typography>
            <Grid container spacing={2} sx={{
                // width:'50%'
                p: 2,
            }}>

                {
                    sortedExpenses.map((expense) => <ExpenseHistoryCard key={expense.id} expense={expense} />)
                }
            </Grid>
        </Container>
    )
}