import { useState } from 'react';
import ExpensesFilter from './components/Expenses/ExpenseFilter';
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/Expenses/NewExpense';
const dummy_data = [
  { id: 1, title: 'Car insurance', date: new Date(2021, 12, 10), amount: 29 },
  { id: 2, title: 'Mobile', date: new Date(2021, 12, 12), amount: 50 },
  {
    id: 3,
    title: 'washing machine',
    date: new Date(2022, 12, 15),
    amount: 60,
  },
  {
    id: 4,
    title: 'winter shopping',
    date: new Date(2019, 12, 20),
    amount: 35.35,
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_data);
  const addExpenseHandler = (expense) => {
    console.log('expense in app', expense);
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
