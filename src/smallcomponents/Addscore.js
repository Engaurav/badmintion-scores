import React from 'react';
import style from '../styles/addscore.module.css'

function Addscore() {
  return (
    <div>
        <div className={style.Round}><h3>Set 1: Round 3</h3></div>
        <div className={style.WinDiv}>
            <div style={{width:'50%'}}><button className={style.WinDivButton}>Player1 Won Round</button></div>
            <div><button className={style.WinDivButton}>Player2 Won Round</button></div>
        </div>
    </div>
  )
}

export default Addscore