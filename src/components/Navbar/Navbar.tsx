import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = (props) => (
    <nav>
        <div className="nav-wrapper blue lighten-3 plr10">
            <a href="/" className="brand-logo">My To Do App 2</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Список дел</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
