import { useState } from "react";
export default function UseStateComp() {
    const [count, setCount]=useState(0); 
    return(
        <div>
            <h2>useState Hook</h2>
            <p>Count is: {count}</p>
            <button style={{marginRight:'15px'}}
            onClick={()=>setCount(count => count+1)}            
            >Increment</button>
            <button
            onClick={()=>setCount(count => count-1)}
            >Decrement</button>
        </div>
    );
}