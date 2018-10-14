import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';


export const ExpenseSummary = (props) => {
    const expenseWord = props.totalCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(props.totalAmount / 100).format('$0,000.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.totalCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal} </span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>    
            </div>
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
