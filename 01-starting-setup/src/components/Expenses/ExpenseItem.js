import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHndlr = () => {
    setTitle('updated !!');
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className='expense-'>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHndlr}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
