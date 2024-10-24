import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        SONAL
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li className='nav-item'>
                <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/services' className='nav-Links' onClick={closeMobileMenu}>
                Services
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/products' className='nav-Links' onClick={closeMobileMenu}>
                Products
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
                 Sign Up
                </Link>
            </li>
        </ul>

    {button && <Button buttonStyle='btn--outline'> SIGN UP 
        </Button>}

     </div>
    </nav>
    </>
  )
}

export default Navbar