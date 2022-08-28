import React, { useEffect, useState } from "react";
import Addscore from "../smallcomponents/Addscore";
import Displayscore from "../smallcomponents/Displayscore";
import Player from "../smallcomponents/Player";
import style from "../styles/game.module.css";
import {collection,addDoc} from "firebase/firestore";
import { db } from "../firebase-config";

function Game(props) {
  const [scorecard,setScorecard] = useState({});
  const [live,setLive] = useState(false);
  const [player1Score,setPlayer1Score] = useState(0);
  const [player2Score,setPlayer2Score] = useState(0);
  const [round,setRound] = useState(0);
  const [showAddScore,setShowAddScore] = useState(false);
  const usersCollectionRef = collection(db, "scorecard");


  useEffect(()=>{
    console.log(props.scorecard)
    setScorecard(props.scorecard);
    setLive(props.live);
    if(props.live){
      setShowAddScore(true);
    }
  },[props])


  const handleGame = async (player) => {
    if(player){
      // console.log('Player1')
      
      let data =  scorecard;

      data.rounds[round].player1currentscore =  player1Score+1;
      data.rounds[round].player2currentscore =  player2Score;
      let points = {
        player1point :  player1Score+1,
        player2point :  player2Score,
        won : true
      }
       data.rounds[round].points.push(points);
       let val =  player1Score + 1;
       setPlayer1Score(val);


      if(val>20 && val-player2Score >=2){
        let newround = {
          player1currentscore:0,
          player2currentscore:0,
          points : []
        }
        data.player1set += 1;
        if(round===2 || data.player1set===2){
          setShowAddScore(false);
          setLive(false);
        }else{
          data.rounds.push(newround);
          setPlayer1Score(0);
          setPlayer2Score(0);
          setRound(1+round);
        }
      }
      if(val===30){
        let newround = {
          player1currentscore:0,
          player2currentscore:0,
          points : []
        }
        data.player1set += 1;
        if(round===2 || data.player1set===2){
          setShowAddScore(false);
          setLive(false);
        }else{
          data.rounds.push(newround);
          setRound(1+round);
          setPlayer1Score(0);
          setPlayer2Score(0);
        }
      }

      setScorecard(data);

    }else{
      // console.log('Player2')
      let data =  scorecard;
      data.rounds[round].player1currentscore =  player1Score;
      data.rounds[round].player2currentscore =  player2Score+1;
      let points = {
        player1point :  player1Score,
        player2point :  player2Score+1,
        won : false
      }
       data.rounds[round].points.push(points);
       setScorecard(data);
       let val = player2Score + 1;
       setPlayer2Score(val);

       if(val>20 && val-player1Score >=2){
        let newround = {
          player1currentscore:0,
          player2currentscore:0,
          points : []
        }
        data.player2set += 1;
        if(round===2 || data.player2set===2){
          setShowAddScore(false);
          setLive(false);
          await addDoc(usersCollectionRef, data);
        }else{
          data.rounds.push(newround);
          setRound(1+round);
          setPlayer1Score(0);
          setPlayer2Score(0);
        }

      }
      if(val===30){
        let newround = {
          player1currentscore:0,
          player2currentscore:0,
          points : []
        }
        data.player2set += 1;
        if(round===2 ||  data.player2set===2){
          setShowAddScore(false);
          setLive(false);
          await addDoc(usersCollectionRef, data);
        }else{
          data.rounds.push(newround);
          setRound(1+round);
          setPlayer1Score(0);
          setPlayer2Score(0);
        }
      }
    }
  }

  return (
    <div className={style.Game}>
      
      <div className={style.GameHead}>
          <div className={style.HeadImage}>
          { live ? <img src='https://cdn-icons-png.flaticon.com/512/502/502189.png' alt='start'/>    : 
            <a href="./"><img src="https://cdn-icons-png.flaticon.com/512/189/189254.png" alt="backHome" width='40px' /></a>
          }
              
          </div>
          <div className={style.HeadText}><h1>{ live ? <img src='https://cdn-icons-png.flaticon.com/512/2150/2150463.png' alt='live' width='40'/>:''} Badminton Match</h1></div>
      </div>
      <Player scorecard={scorecard} round={round} live={live}/><hr/>
      {showAddScore ? <Addscore handleGame={handleGame}  scorecard={scorecard}/> : ''}
      <Displayscore scorecard={scorecard}/>

      
    </div>
  );
}

export default Game;
