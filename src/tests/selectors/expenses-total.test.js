import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test('should return 0 if there is no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should correctly add up a single expenses', () => {
  const total = 195;
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(total)
});

test('should return total of expenses', () => {
  const total = 114195;
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(total)
});