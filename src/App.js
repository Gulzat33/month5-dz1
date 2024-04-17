import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const counter = useSelector((state) => state.count)
    const dispatch = useDispatch()


    const increment = () => {
        dispatch({type:'INCREMENT'})
    }
    const decrement = () => {
        dispatch({type:'DECREMENT'})
    }

    const addTen = () => {
        dispatch({type:'ADD-TEN'})
    }
    const clear = () => {
        dispatch({type:'CLEAR'})
    }
  return (
      <div>
            <span>{counter}</span>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={addTen}>+10</button>
          <button onClick={clear}>clear</button>
      </div>
  );
};

export default App;
