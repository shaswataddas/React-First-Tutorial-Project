import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


const Expenses = (props) => {

    const [selectedExpenseFilter, setSelectedExpenseFilter] = useState('');
    const expensesFilterHandler = (filterData) => {
        setSelectedExpenseFilter(filterData);
    }

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === selectedExpenseFilter || selectedExpenseFilter === 'All'
    });

    let expenseContent = <p>No Expense Found.</p>

    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={selectedExpenseFilter} 
                    onExpensesFilterSelect={expensesFilterHandler} 
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;