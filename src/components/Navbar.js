import React from 'react';
import icon from '../assets/images/icon.png';
import style from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={style.Navbar}>
        <div className={style.Icondiv}>
            <img src={icon} alt='Icon'/>
        </div>
        <div className={style.Brandtext}>
            <h1><span>B</span>adminton <span>S</span>corecard</h1>
        </div>
    </nav>
  )
}

export default Navbar