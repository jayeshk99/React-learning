import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };
  const increaseDynamicallyHandler = () => {
    dispatch(counterActions.increaseDynamically(5)); // {payload: 5}
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
