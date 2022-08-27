import React, {  useEffect, useState } from 'react';
import style from '../styles/displayscore.module.css';
import MatchHistory from './MatchHistory';
import MatchSummary from './MatchSummary';

function Displayscore(props) {
  const [scorecard,setScorecard] = useState({});
  useEffect(()=>{
    setScorecard(props.scorecard);
  },[props])
  const [tab,setTab] = useState(true);

  return (
    <div className={style.Displayscore}>
        <div className={style.DisplayHead}>
            {tab ? <button style={{background:'#ea6660',color:'white'}} className={style.DisplayMatchButton}>Match Summary</button> : <button className={style.DisplayMatchButton} onClick={()=>{setTab(true)}}>Match Summary</button>}
            {tab ? <button className={style.DisplayMatchButton} onClick={()=>{setTab(false)}}>Match History</button> : <button style={{background:'#ea6660',color:'white'}} className={style.DisplayMatchButton}>Match History</button>}
        </div>
        <div className={style.DisplayMain}>

        { tab ? <MatchSummary scorecard={scorecard}/> : <MatchHistory scorecard={scorecard}/>}
        </div>
    </div>
  )
}

export default Displayscore