import { useContext } from 'react'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA'

export default function ComponentC () {
    //consumer component
    const user=useContext(UserContext); 
    return(
        <div className="box">
            <h3> ComponentC -consumer </h3>
            <p>{`Hello again, ${user}!`}</p>
            <ComponentD />
        </div>
    )
}