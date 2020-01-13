import React from 'react';

const Navbar: React.FC = (props) => {
    //console.log(props);
    
    return (
        <nav>
            <div className="nav-wrapper blue lighten-3 plr10">
                <a href="/" className="brand-logo">React + Typescrypt + Materialize CSS</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Список дел</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
