import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incHandler = () => {
    dispatch({
      type: 'inc'
    })
  }

  const decHandler = () => {
    dispatch({
      type: 'dec'
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.btns}>
        <button onClick={incHandler}>Inc</button>
        <button onClick={decHandler}>Dec</button>
      </div>
    </main>
  );
};

export default Counter;
