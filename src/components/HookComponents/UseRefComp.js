import { useRef } from "react";
import Stopwatch from "./extra/Stopwatch";
export default function UseRefComp() {
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'pink';
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'pink';
    }

    return(
        <div>
            <h2>useRef Hook - Classic use case: </h2>
            <div>
                <button onClick={handleClick1}>Click to focus input1</button> 
                <br></br>
                <input ref={inputRef1} type='text' onBlur={()=> inputRef1.current.style.backgroundColor = ''}/> 
                <br></br>
                <button onClick={handleClick2}>Click to focus input2</button> 
                <br></br>
                <input ref={inputRef2} type='text' onBlur={()=> inputRef2.current.style.backgroundColor = ''} /> 
            </div>
            <h2>+ Stopwatch</h2>
            <Stopwatch />
        </div>
    );
}