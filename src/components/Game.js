import React from "react";
import Addscore from "../smallcomponents/Addscore";
import Displayscore from "../smallcomponents/Displayscore";
import Player from "../smallcomponents/Player";
import style from "../styles/game.module.css";

function Game() {
  return (
    <div className={style.Game}>
      <div className={style.GameHead}>
          <div className={style.HeadImage}>
              <img src='https://cdn-icons-png.flaticon.com/512/502/502189.png' alt='start'/>   
          </div>
          <div className={style.HeadText}><h1><img src='https://cdn-icons-png.flaticon.com/512/2150/2150463.png' alt='live' width='40'/> Badmintion Match</h1></div>
      </div>
      <Player/>
      <Addscore/>
      <Displayscore/>

      
    </div>
  );
}

export default Game;
