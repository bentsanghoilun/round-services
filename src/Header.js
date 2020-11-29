import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import Logo from './img/logo.jpg';

const Header = props => {
    return(
        <header className='header'>
            <div className='header-logo-div'>
                <img src={Logo} width='36px' height='36px' className='logo'/>
                <h2 className='brand-text'>Round Services Travel</h2>
            </div>
            <div className='header-nav-div'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Travel to HK</NavLink>
                <NavLink to='/flextour'>Flextour</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </header>
    )
}

export default Header;