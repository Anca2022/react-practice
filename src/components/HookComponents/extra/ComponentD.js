import { useContext } from "react"
import { UserContext } from "./ComponentA"

export default function ComponentD () {
    //consumer component
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h3> ComponentD - consumer </h3>
            <p>{`Bye, ${user}`}</p>
        </div>
    )
}