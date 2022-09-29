import React,{useState,useEffect} from 'react'

function Effect() {
    const [count,setCount] =useState(0)
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
      setCalculation(() => count * 2);  
    },[count])
  return (
    <div>
        <h2>What is useEffect Hook ?(Implementation)</h2>
        <ul>
            <li>The useEffect Hook allows you to perform side effects in your components.</li>
            <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
            <li>useEffect accepts two arguments. The second argument is optional.</li>
            <li>useEffect(function, dependency)</li>
        </ul>
        <h3>Example:-</h3>
       <p>Cost of 1 bulletv = 2$</p>
        <h1>M416 Firing bullets: {count}</h1>
        <h1>Calculation: {calculation}$ <br/>
        <button type="button" className="btn btn-danger" onClick={() => setCount((c) => c + 1)}>Shoot</button>
        </h1>
    </div>
  )
}

export default Effect