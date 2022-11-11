import { legacy_createStore as createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 };
  }

  if (action.type === 'decrement') {
    return { count: state.count - 1 };
  }

  if (action.type === 'incrementBy2') {
    return { count: state.count + 2 };
  }

  if (action.type === 'decrementBy2') {
    return { count: state.count - 2 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
