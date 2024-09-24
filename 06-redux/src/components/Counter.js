import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const increamentHandler = () => {
    dispatch({ type: 'increament' });
  };

  const decreamentHandler = () => {
    dispatch({ type: 'decreament' });
  };
  const increaseDynamicallyHandler = () => {
    dispatch({ type: 'increaseDynamically', value: 5 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseDynamicallyHandler}>Increase by 5</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
