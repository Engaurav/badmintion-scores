import React from 'react';
import style from '../styles/matchhistory.module.css'
import MatchSet from './MatchSet';


function MatchHistory() {
  return (
    <div className={style.MatchHistory}>
        <MatchSet data='1'/>
        <MatchSet data='2'/>
        <MatchSet data='3'/>
    </div>
  )
}

export default MatchHistory