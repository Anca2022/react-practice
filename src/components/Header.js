import { Link } from "react-router-dom";

export default function Header () {
    return(
        <header className="header">
            <nav style={{margin:'2rem 1rem'}}>
                <Link to='/animated' style={{marginRight:'2rem'}}>Animated</Link>
                <Link to='/blog' style={{marginRight:'2rem'}}>Blog</Link>
                <Link to='/hooks'>React Hooks</Link>
            </nav>
        </header>
    );
}