import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  console.log('rendered');
  const dispatch = useDispatch();
  const count = useSelector(state => state.count)

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  const incrementHandler2 = () => {
    dispatch({type: 'incrementBy5'});
  }

  const decrementHandler2 = () => {
    dispatch({type: 'decrementBy5'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler2}>Increment by 5</button>
        <button onClick={decrementHandler2}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
