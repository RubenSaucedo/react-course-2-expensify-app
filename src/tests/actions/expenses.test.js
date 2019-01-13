import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up edit expense action object', () => {
    
    const action = editExpense('123abc', { description: 'newDescription' });
    expect(action).toEqual({   
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'newDescription'
        } 
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '109500',
        createdAt: '1000',
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
    });
});

test('Should setup add expense action object with no provided values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});