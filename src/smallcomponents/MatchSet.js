import React from 'react'
import style from '../styles/matchhistory.module.css'


function MatchSet(props) {
  return (
    <div className={style.MatchSet}>
        <h5>Set {props.data}</h5>
        <ul className={style.ScoreList}>
            <li>1-0</li>
            <li>1-1</li>
            <li>1-2</li>
            <li>2-2</li>
            <li>4-2</li>
            <li>5-2</li>
            <li>5-3</li>
            <li>5-4</li>
        </ul>
    </div>
    
  )
}

export default MatchSet