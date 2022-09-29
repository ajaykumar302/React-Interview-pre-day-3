import React,{useReducer} from 'react'

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      throw new Error();
  }
}

function Reduser() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h2>What is UseReducer Hook ?(Implementation)</h2>
        <ul>
            <li>The useReducer Hook is similar to the useState Hook.</li>
            <li>It allows for custom state logic.</li>
            <li>If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</li>
            <li>useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</li>
        </ul>
        <h3>Example:-</h3>
        <h1>  Count: {state.count} <br/>
         
      <button onClick={() => dispatch({type: 'increment'})}className="btn btn-primary">increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}className="btn btn-danger">decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}  className="btn btn-warning">reset</button>
        </h1>
      
    </div>
  )
}

export default Reduser