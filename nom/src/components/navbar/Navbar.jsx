import react from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar-buttons">
            <button><Link to="/" class="links">home</Link></button>
            <button><Link to="/find" class="links">find</Link></button>
            <button><Link to="/about" class="links"> about</Link></button>
        </nav>
    )
}

export default Navbar