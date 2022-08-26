import React from 'react';
import style from '../styles/matchsummary.module.css'

function MatchSummary() {
  return (
    <div className={style.MatchSummary}>
        <div className={style.MatchPlayer}>
            <div><b>Player</b></div>
            <div className={style.MatchDetail}>
                <div><b>SET</b></div>
                <div><b>Round 1</b></div>
                <div><b>Round 2</b></div>
                <div><b>Round 3</b></div>
            </div>
        </div>
        <div className={style.MatchPlayer}>
            <div>Player 1</div>
            <div className={style.MatchDetail}>
                <div>1</div>
                <div>21</div>
                <div>13</div>
                <div>19</div>
            </div>
        </div>
        <div className={style.MatchPlayer}>
        <div>Player 2</div>
            <div className={style.MatchDetail}>
                <div>1</div>
                <div>18</div>
                <div>21</div>
                <div>19</div>
            </div>
        </div>
    </div>
  )
}

export default MatchSummary