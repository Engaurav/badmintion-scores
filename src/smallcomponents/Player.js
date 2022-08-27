import React, { useEffect, useState } from 'react'
import style from "../styles/game.module.css";


function Player(props) {
  const [live,setLive] = useState(true);
  const [player1,setPlayer1] = useState('Player1');
  const [player1SetScore,setPlayer1SetScore] = useState(2);
  const [player1CurrentScore,setPlayer1CurrentScore] = useState('-');
  const [player2,setPlayer2] = useState('Player2');
  const [player2SetScore,setPlayer2SetScore] = useState(0);
  const [player2CurrentScore,setPlayer2CurrentScore] = useState('-');
  const [set,setSet] = useState(0);

  useEffect(()=>{
    const data = props.scorecard;
    console.log(data);
    setPlayer1(data.player1);
    setPlayer2(data.player2);
    setPlayer1SetScore(data.player1set);
    setPlayer2SetScore(data.player2set);

  },[props])

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
                {player1SetScore} - {player2SetScore}
            </h1>
            { live ? <><h6>
                SET {set}
            </h6>
            <h6>
                {player1CurrentScore}:{player2CurrentScore}
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