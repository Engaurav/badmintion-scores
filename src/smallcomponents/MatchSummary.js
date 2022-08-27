import React, { useEffect, useState } from 'react';
import style from '../styles/matchsummary.module.css'

function MatchSummary(props) {
    const [player1,setPlayer1] = useState('Player 1');
    const [player2,setPlayer2] = useState('Player 2');
    const [player1SetScore,setPlayer1SetScore] = useState(2);
    const [player2SetScore,setPlayer2SetScore] = useState(0);
    const [rounds,setRounds] = useState([]);


    useEffect(()=>{
        const data = props.scorecard;
        setPlayer1(data.player1);
        setPlayer2(data.player2);
        setPlayer1SetScore(data.player1set);
        setPlayer2SetScore(data.player2set);
        if(data.rounds){
            setRounds(data.rounds);
        }
        // console.log(rounds)
        
    },[props])
  return (
    <div className={style.MatchSummary}>
        <div className={style.MatchPlayer}>
            <div><b>Player</b></div>
            <div className={style.MatchDetail}>
                <div><b>SET</b></div>
                { rounds.map((val,index)=>{
                    const i = index+1;
                    return <div key={index}><b>Round {i}</b></div>
                })}
                
                {/* <div><b>Round 2</b></div>
                <div><b>Round 3</b></div> */}
            </div>
        </div>
        <div className={style.MatchPlayer}>
            <div>{player1}</div>
            <div className={style.MatchDetail}>
                <div>{player1SetScore}</div>
                { rounds.map((val,index)=>{
                    return <div>{val.player1currentscore}</div>
                })}
            </div>
        </div>
        <div className={style.MatchPlayer}>
        <div>{player2}</div>
            <div className={style.MatchDetail}>
                <div>{player2SetScore}</div>
                { rounds.map((val,index)=>{
                    return <div>{val.player2currentscore}</div>
                })}
            </div>
        </div>
    </div>
  )
}

export default MatchSummary