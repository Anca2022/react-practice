import { useState, useMemo } from "react";
export default function AnotherUseMemoComp (){
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false); 
    const themeStyles = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black'
    }


    function slowFunction(num) {
        for(let i=0; i<500000000; i++){}
        return num*2;
    }
    // const double=slowFunction(number); 
    const double=useMemo(()=> {
        return slowFunction(number)
    }, [number]) 

    return(
        <div>
            <h3>Another example of useMemo: </h3>
            <input type='number' placeholder="type a number" onChange={(e)=> setNumber(e.target.value)}></input> 
            <br/>
            <button onClick={()=> setDarkTheme(darkTheme=> !darkTheme)}>Change theme</button>
            <div style={themeStyles}>The double of the number typed above is: {double}</div>
        </div>
    )
    //the function is still slow, but it doesn't affect Change theme anymore
};