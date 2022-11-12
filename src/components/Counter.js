import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  // console.log('rendered');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count)
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const incrementHandler5 = () => {
    dispatch(counterActions.incrementBy5(5));  // this will give {type: "some random type", payload: 5}
  }

  const decrementHandler5 = () => {
    dispatch(counterActions.decrementBy5(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler5}>Increment by 5</button>
        <button onClick={decrementHandler5}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
