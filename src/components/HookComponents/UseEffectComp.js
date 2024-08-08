import { useState, useEffect } from "react";
export default function UseEffectComp() {
    const [count, setCount]=useState(0); 
    
    useEffect (()=>{
        console.log(count);
        return ()=>{
            console.log('am iesit din useEffect component');
        }
    }, [count]);

    return(
        <div>
            <h2>useEffect Hook</h2>
            <p>Count is: {count}</p>
            <button style={{marginRight:'15px'}}onClick={()=>setCount(count => count+1)}>Increment</button>
            <button onClick={()=>setCount(count => count-1)}>Decrement</button>
        </div>
    );
}