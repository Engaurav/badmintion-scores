import React, { useState } from 'react';
import icon from '../assets/images/icon.png';
import GameRules from '../smallcomponents/GameRules';
import style from '../styles/navbar.module.css';


function Navbar() {
  const [showGameRule,setShowGameRule] = useState(false);
  return (
    <>
    <nav className={style.Navbar}>
        <div className={style.Icondiv}>
            <img src={icon} alt='Icon'/>
        </div>
        <div className={style.Brandtext}>
            <h1><span>B</span>adminton <span>S</span>corecard</h1>
        </div>
        <div className={style.Rules}>
          <img src='https://cdn-icons-png.flaticon.com/512/7721/7721934.png' alt='rules' width='50px' onClick={()=>{setShowGameRule(true)}} />
        </div>
    </nav>
    {showGameRule ? <GameRules setShowGameRule={setShowGameRule}/> : <></>}

    </>
  )
}

export default Navbar