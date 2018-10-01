import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up REMOVE expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up EDIT expense action object', () => {
    const action = editExpense( '123abc', {note:'Rent', amount:4000} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note:'Rent', amount:4000}
    });
});


test('Should set up ADD expense action object', () => {
    const expenseData = {
        description: 'Rent', 
        amount:109500,
        createdAt: 1000,
        note:'Last month rent' 
    }
    
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up ADD expense action object with default values', () => {
    const action = addExpense( );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            amount:0,
            createdAt: 0,
            note:'' ,
            id: expect.any(String)
        }
    });
});