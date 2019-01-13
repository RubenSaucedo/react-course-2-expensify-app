import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default expense values', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('Shoud add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    }
    const state = expenseReducer(undefined, action);
    expect(state[0]).toEqual(expenses[0]);
});

test('Should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should edit expense', () => {
    const description = 'coffee';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state[0].description).toBe('coffee');
});

test('Should edit expense if id not found', () => {
    const description = 'coffee';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
});