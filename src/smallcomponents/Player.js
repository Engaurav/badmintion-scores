import React, { useEffect, useState } from 'react'
import style from "../styles/game.module.css";


function Player() {
  const [live,setLive] = useState(true);
  const [player1,setPlayer1] = useState('Player1');
  const [player1Score,setPlayer1Score] = useState(4);
  const [player2,setPlayer2] = useState('Player2');
  const [player2Score,setPlayer2Score] = useState(9);
  const [set,setSet] = useState(1);
  useEffect(()=>{
    if(live){
        document.getElementById('GameScore').style.color = '#ea6660';
    }
  },[live])
  return (
    <div className={style.PlayerDetail}>
        <div className={style.Player}>
          <div className={style.PlayerImage}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2348/2348806.png"
              alt="Player1"
            />
          </div>
          <div className={style.PlayerName}>
            {player1}
          </div>
        </div>
        <div className={style.GameScore} id='GameScore'>
            <h1 className={style.GameScoreFinal}>
                5 - 2
            </h1>
            { live ? <><h6>
                SET {set}
            </h6>
            <h6>
                {player1Score}:{player2Score}
            </h6></> : <h5>Finished</h5>}
            
        </div>
        <div className={style.Player}>
          <div className={style.PlayerImage}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2348/2348806.png"
              alt="Player2"
            />
          </div>
          <div className={style.PlayerName}>
            {player2}
          </div>

        </div>
      </div>
  )
}

export default Player