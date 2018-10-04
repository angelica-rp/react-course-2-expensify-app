import React from 'react';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpenseSummary = (props) => {
    const expenseWord = props.totalCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(props.totalAmount / 100).format('$0,000.00');
    return (
        <div>
            <h2>Viewing {props.totalCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses= getVisibleExpenses(state.expenses, state.filters);
    return {
        totalCount: expenses.length,
        totalAmount: getExpensesTotal(expenses)
    }
}; 

export default connect(mapStateToProps)(ExpenseSummary);
