import React from 'react';
import './Header.css';
import Knight from '../Images/Knight.png';

function Header()
{
    return (
        <header>
            <img src={ Knight } id="knight-1" alt="Knight" />
            <h1>Two Knights</h1>
            <img src={ Knight } id="knight-2" alt="Knight" />
        </header>
    );
}

export default Header;