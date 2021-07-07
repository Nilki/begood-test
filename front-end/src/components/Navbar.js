import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Register.Com <i className="fas fa-truck-pickup"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>

                    <ul className={click ? 'nav-menuactive' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/create' className='nav-links' onClick={closeMobileMenu}>
                                CREATE
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/read' className='nav-links' onClick={closeMobileMenu}>
                                READ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/update' className='nav-links' onClick={closeMobileMenu}>
                                UPDATE
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/delete' className='nav-links' onClick={closeMobileMenu}>
                                DELETE
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
