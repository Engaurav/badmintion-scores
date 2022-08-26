import React from 'react';
import style from '../styles/start.module.css';

function Start(props) {
  return (
    <div className={style.Start}>
        <div className={style.StartHead}>
            <div className={style.HeadImage}>
                <img src='https://cdn-icons-png.flaticon.com/512/502/502189.png' alt='start'/>   
            </div>
            <div className={style.HeadText}><h1>Start New Game</h1></div>
            <div className={style.StartClose}>
                <img src='https://cdn-icons-png.flaticon.com/512/5773/5773168.png' alt='close' onClick={()=>{props.setShowStart(false)}}/>
            </div>
           
        </div>
        <div className={style.StartMain}>
            <form>
                <div className={style.Player}>
                    <div className={style.PlayerImage}>
                        <img src='https://cdn-icons-png.flaticon.com/512/2348/2348806.png' alt='Player1'/>
                    </div>
                    <div className={style.PlayerInput}>
                        <input type='text' placeholder='Enter Player 1' className='form-control' required/>
                    </div>
                </div>
                <div className={style.StartGame}>
                    <button type='submit'>Start</button>
                </div>
                <div  className={style.Player}>
                    <div className={style.PlayerImage}>
                        <img src='https://cdn-icons-png.flaticon.com/512/2348/2348806.png' alt='Player2'/>
                    </div>
                    <div className={style.PlayerInput}>
                        <input type='text' placeholder='Enter Player 2' className='form-control' required/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Start