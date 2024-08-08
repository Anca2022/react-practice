import {useState, useMemo} from 'react'; 
import initialItems from "./extra/initialItems";
import AnotherUseMemoComp from './AnotherUseMemoComp';
export default function UseMemoComp() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems); 

    
    const item=useMemo(()=>{
        return items.find(item=>item.isSelected);
    }, [items])
    
    return(
        <div>
            <h2>useMemo Hook</h2>
            <p>Count: {count}</p>
            <p>Selected item: {item?.id}</p>
            <button onClick={ ()=> setCount(count=>count+1)}>Increment</button>
            <AnotherUseMemoComp></AnotherUseMemoComp>
        </div>
    );
    //daca selectedItem nu e wrapped in useMemo, de fiecare data cand se modifica state,
    // intreaga componenta se re-randeaza => selectedItem se recalculeaza, chiar daca valoarea nu se schimba
    // => performance issues
}