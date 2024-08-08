import { useState, useCallback} from "react";
import Search from "./extra/Search";
import { shuffle } from "./extra/shuffle";

const allUsers = ['john', 'george', 'alex', 'james', 'luke'];


export default function UseCallbackComp() {
    const [users, setUsers] = useState(allUsers);
    const [count, setCount] = useState(0);

    const handleSearch = useCallback(
        (text) => {
            //!! daca vrem sa facem console.log first user - cum functia e freezed,
            // retine arrayul initial de useri 
            //daca vrem sa updateze array[users] => in includem in dependency array
            // si functia handleSearch va fi redefinita de fiecare data cand se modifica array
            // dar nu si cand se modifica state din cauza 'increment count' 
            console.log(users[0]);
            const filteredUsers = allUsers.filter( user=> 
            user.includes(text));
        setUsers(filteredUsers);
        }, [users])

    return(
        <div>
            <h2>useCallback Hook</h2>
            <button onClick={
                () => setUsers(shuffle([...allUsers]))
            }>
                Shuffle users
            </button> 

            <Search onChange={handleSearch}></Search>

            <div>
                {users?.map((user) =>(
                    <p key={user}>{user}</p>
                ) )}
            </div>

            <div>
                <p>Count: {count}</p>
                <button onClick={()=> setCount(count => count+1)}>Increment</button>
            </div>

        </div>
    );
}