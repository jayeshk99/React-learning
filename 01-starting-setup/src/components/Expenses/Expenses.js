import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import { ExpensesList } from './ExpensesList';
import { ExpenseChart } from './ExpensesChart';
function Expenses(props) {
  const { expenses } = props;
  const [filter, setFilter] = useState('2020');
  const filterChangeHandler = (year) => {
    setFilter(year);
  };
  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() == filter
  );
  console.log('filteredExpenses:', filteredExpenses);

  // third way ----
  // let expensesContent = <p>No content found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     />
  //   ));
  // }

  return (
    <Card className='expenses'>
      <ExpensesFilter year={filter} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />

      {/* -------------------------------------------------------------------------------------------- */}

      {/* ------- one way ------ */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No data available</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      )} */}

      {/* ----- second way ----- */}
      {/* {filteredExpenses.length === 0 && <p>No data available</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}

      {/* ---- third way ------ */}
      {/* {expensesContent} */}
    </Card>
  );
}

export default Expenses;
