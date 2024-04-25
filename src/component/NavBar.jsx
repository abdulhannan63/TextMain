import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
const NavBar = () => {
  const [flg, setFlg] = useState(false);
  const setTop = () => {
    let Nav = document.querySelector('.nav__menu');
    let closeB=document.querySelector('.nav__close');
    if (flg == false) {
      setFlg(true);
    } else {
      setFlg(false);
    }
    if (flg == true) {
      Nav.classList.add('showMenu');
      closeB.style.display= "flex";
    }
    else {
      closeB.style.display= "none";
      Nav.classList.remove('showMenu');

    }
  }


  return (
    <header className='header' id='header'>
      <nav className="nav container">
        <NavLink href="#" className="nav__logo">TextMain</NavLink>
        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav__item"> <NavLink to='/' className="nav__link">Home</NavLink> </li>
            <li className="nav__item"> <NavLink to='/about' className="nav__link">About</NavLink> </li>
          </ul>
        </div>
        {/* close Button */}
        <div className="nav__close" onClick={setTop} id='nav-close'>
          &#x2716;
        </div>

        <div className='nav__action'>

          {/* Toggle Button */}
          <div className="nav__toggle" onClick={setTop} id="nav-toggle">
            <div className='menuBut'></div>
            <div className='menuBut'></div>
            <div className='menuBut'></div>
            
          </div>
        </div>
      </nav>

    </header>
  )
}

export default NavBar