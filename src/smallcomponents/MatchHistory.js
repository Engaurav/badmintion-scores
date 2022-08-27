import React, { useEffect, useState } from 'react';
import style from '../styles/matchhistory.module.css'
import MatchSet from './MatchSet';


function MatchHistory(props) {
  const [rounds,setRounds] = useState([]);
  useEffect(()=>{
    const data = props.scorecard;
    setRounds(data.rounds);
    // console.log(data)
  },[props])
  return (
    <div className={style.MatchHistory}>
      { rounds.map((value,index)=>{
        const i = index+1;
        return <MatchSet index={i} key={index} points={value.points}/>
      })}
        
    </div>
  )
}

export default MatchHistory