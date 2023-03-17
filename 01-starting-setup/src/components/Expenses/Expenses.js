import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {

    const [selectedExpenseFilter, setSelectedExpenseFilter] = useState('');
    const expensesFilterHandler = (filterData) => {
        setSelectedExpenseFilter(filterData);
    }

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === selectedExpenseFilter || selectedExpenseFilter === 'All'
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={selectedExpenseFilter} 
                    onExpensesFilterSelect={expensesFilterHandler} 
                />
                <ExpensesList items={filteredExpenses} ></ExpensesList>
            </Card>
        </div>
    );
};

export default Expenses;