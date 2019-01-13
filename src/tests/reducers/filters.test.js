import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')  
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Rent' });
    expect(state.text).toBe('Rent')
});

test('Should set start date filter', () => {
    const action = { 
        type: 'SET_START_DATE', 
        startDate: moment(0).add(4, 'days').valueOf()
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(moment(0).add(4, 'days').valueOf());
});

test('Should set end date filter', () => {
    const action = { 
        type: 'SET_START_DATE', 
        startDate: moment(0).add(5, 'days').valueOf()
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(moment(0).add(5, 'days').valueOf());
});