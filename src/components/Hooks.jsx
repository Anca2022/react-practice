import { Link } from "react-router-dom";
export default function Hooks () {
    return (
        <div>
            <h1>React hooks</h1>
            <ul>
                <li><Link to='usestate'>useState</Link></li>
                <li><Link to='useeffect'>useEffect</Link></li>
                <li><Link to='usememo'>useMemo</Link></li>
                <li><Link to='usecallback'>useCallback</Link></li>
                <li><Link to='useref'>useRef</Link></li>
                <li><Link to='usereducer'>useReducer</Link></li>
                <li><Link to='usecontext'>useContext</Link></li>
            </ul>
        </div>
    );
}