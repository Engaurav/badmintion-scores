import React from 'react'
import style from '../styles/gamerules.module.css'

function GameRules(props) {
  return (
    <div className={style.GameRules}>
      <div className={style.GameHead}>
          <div className={style.HeadText}><h1>Game Rules</h1></div>
          <div style={{cursor:'pointer'}} onClick={()=>{props.setShowGameRule(false)}}><img src='https://cdn-icons-png.flaticon.com/512/753/753345.png' alt='Close' width='35px' /></div>
      </div>
      <div>
        <ul>
        <li>A match consists of the best of three games of 21 points.</li>
        <li>
        The player/pair winning a rally adds a point to its score.
        </li>
        <li>
            At 20-all, the player/pair which first gains a 2-point lead wins that game.
        </li>
        <li>
            At 29-all, the side scoring the 30th point wins that game.
        </li>
        </ul>
      </div>

    </div>
  )
}

export default GameRules