import { useRef } from "react";
import Stopwatch from "./extra/Stopwatch";
export default function UseRefComp() {
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);

    function handleClick(input){
        input.current.focus();
        input.current.style.backgroundColor = 'pink';
    }
    function handleOnBlur(input){
       input.current.style.backgroundColor = '';
    }

    return(
        <div>
            <h2>useRef Hook - Common use case: </h2>
            <div>
                <button onClick={()=>handleClick(inputRef1)}>Click to focus input1</button> 
                <br></br>
                <input ref={inputRef1} type='text' onBlur={()=> handleOnBlur(inputRef1)} /> 
                <br></br>
                <button onClick={()=>handleClick(inputRef2)}>Click to focus input2</button> 
                <br></br>
                <input ref={inputRef2} type='text' onBlur={()=> handleOnBlur(inputRef2)} /> 
            </div>
            <h2>+ Stopwatch</h2>
            <Stopwatch />
        </div>
    );
}