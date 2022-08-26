import React, { useState } from 'react';
import style from '../styles/newgame.module.css'

function Newgame(props) {
  const [changeIcon,setChangeIcon] = useState(false)
  return (
    <div className={style.Newgame}>
        <button onMouseEnter={()=>{setChangeIcon(true)}} onMouseLeave={()=>{setChangeIcon(false)}} onClick={()=>{props.setShowStart(true)}}>
           { changeIcon ?  <img src='https://cdn-icons-png.flaticon.com/512/3221/3221793.png' alt='badmintion-icon'width='20px'/>
           :  <img src='https://cdn-icons-png.flaticon.com/512/3221/3221747.png' alt='badmintion-icon'width='20px'/> }
            <span>N</span>ew <span>G</span>ame!
        </button>
    </div>
  )
}

export default Newgame;