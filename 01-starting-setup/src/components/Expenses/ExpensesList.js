import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  console.log('after first if', props.items);
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
