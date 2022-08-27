import React, { useEffect, useState } from 'react'
import style from '../styles/matchhistory.module.css'


function MatchSet(props) {
  const [points,setPoints] = useState([]);
  useEffect(()=>{
    setPoints(props.points)
  },[props])
  return (
    <div className={style.MatchSet}>
        <h5>Set {props.index}</h5>
        <ul className={style.ScoreList}>
          {points.map((val,index)=>{
            const temp = val.won;
            return  temp ? <li key={index}><font style={{color:'red'}}>{val.player1point}</font>:{val.player2point}</li> : <li key={index}>{val.player1point}:<font style={{color:'red'}}>{val.player2point}</font></li>
          })}
        </ul>
    </div>
    
  )
}

export default MatchSet