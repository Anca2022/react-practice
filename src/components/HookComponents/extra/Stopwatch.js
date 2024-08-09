import './stopwatchCss.css'
import { useState, useRef, useEffect } from 'react'; 
export default function Stopwatch () {
    const [isRunning, setIsRunning] = useState(false); 
    const [elapsedTime, setElapsedTime] = useState(0); 
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null); 

    useEffect( ()=> {
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                //Date.now() => timpul in milisec din aprox ~1970
                setElapsedTime(Date.now() - startTimeRef.current); 
            }, 10)
        }
        
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]) 

    function start(){
        setIsRunning(true); 
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime(){
        // let hours = Math.floor(elapsedTime / (1000 * 60*60));  
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);  
        let seconds= Math.floor(elapsedTime / 1000 %60);  
        let milliseconds = Math.floor((elapsedTime % 1000)/ 10);  
        //The padStart() method of String values pads this string with another string (multiple times, if needed) 
        //until the resulting string reaches the given length. The padding is applied from the start of this string.
        // else display 'joaca' din cauza ca minutes/sec/millisec au ba 1 ba 2 cifre - leading '0' daca doar o cifra
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');
        return `${minutes} : ${seconds} : ${milliseconds}`;
    }

    return(
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button className='start-button' onClick={start}>Start</button>
                <button className='stop-button' onClick={stop}>Stop</button>
                <button className='reset-button' onClick={reset}>Reset</button>
            </div>
        </div>
    );
}