import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';
export const NewExpense = (props) => {
  const [show, setShow] = useState(true);
  const saveDataHandler = (expenseData) => {
    console.log('expneseData', expenseData);
    setShow((prev) => (prev = false));
    props.onAddExpense(expenseData);
  };
  const showAddExpense = () => {
    setShow((prev) => (prev = true));
  };
  const hideAddExpense = () => {
    setShow((prev) => (prev = false));
  };

  return (
    <div className='new-expense'>
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveDataHandler}
          onCancelClick={hideAddExpense}
        />
      )}
      {!show && <button onClick={showAddExpense}>Add New Expense</button>}
    </div>
  );
};
