import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random(),
      title: title,
      date: date,
      amount: +amount,
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={dateHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancelClick}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};
