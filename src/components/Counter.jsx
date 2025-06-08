import React,{useState} from "react";
function Counting(){
    const [Count, setCount] = useState(0);

    const increment =() => setCount(Count +1);
    const decrement =() => setCount(Count -1);
    return(
        <div className="counting-container">
            <h1>counting</h1>
            <h2>{Count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
 

export default Counting;