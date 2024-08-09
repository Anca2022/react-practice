import { createContext, useState } from 'react'
import ComponentB from './ComponentB'

//create context
export const UserContext = createContext(); 

export default function ComponentA () {
    const [user] = useState('Anca');

    return(
        <div className="box">
            <h3> ComponentA - provider</h3>
            <p>{`Hello, ${user}!`}</p>
            {/* ComponentA is a provider component; wrap children with provider*/}
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}