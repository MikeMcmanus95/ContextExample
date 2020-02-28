import React from 'react'
import {Link} from 'react-router-dom';
import ThemeButton from './ThemeButton'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <ThemeButton/>
        </div>
    )
}

export default Navbar;
