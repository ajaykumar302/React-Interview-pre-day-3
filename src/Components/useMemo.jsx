import React,{useMemo,useState} from 'react'

// const Fact = (n) =>{
//     let ans = 1;
//     for(var i = n; i>=1;i--){
//         ans= ans*i;
//     }
//     console.log('Factorial');
//     return ans;
// }
function Fact (num) { 
    let result = 1;
     while(num > 0) 
     { 
        result = result * num;
         num = num - 1; 
        } 
        // console.log(result);
        return result;
     }
function Memo() {
    const [count,setCount] = useState(0);
    // const [num,setNum] = useState(5);
    const factorial = useMemo(() => Fact(count),[count])
    // const factorial = Fact(num);
    console.log(factorial)
  return (
    <div>
        <h2>What is UseMemo Hook ?(Implementation)</h2>
        <ul>
            <li>The React useMemo Hook returns a memoized value.</li>
            <li>The useMemo Hook only runs when one of its dependencies update.</li>
            <li>This can improve performance.</li>
        </ul>
        <h3>Example:-</h3>
        <h1>count :{count }</h1>
        {/* {console.log(factorial)} */}
        <h1>count Factorial : {factorial} <br/>
        <button type="button" className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>Count +</button>
        {/* <button type="button" className="btn btn-primary" onClick={() => setNum((c) => c + 1)}>Num +</button> */}
        </h1>
       </div>
  )
}


export default Memo