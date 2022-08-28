import React, { useEffect, useState } from "react";
import style from "../styles/addscore.module.css";

function Addscore(props) {
  const [startRound, setStratRound] = useState(true);
  const [player1, setPlayer1] = useState("Payer1");
  const [player2, setPlayer2] = useState("Payer2");
  const [round,setRound] = useState(0);
  useEffect(() => {
    const data = props.scorecard;
    setPlayer1(data.player1);
    setPlayer2(data.player2);
  }, [props]);


  useEffect(()=>{
    setRound(props.round+1);
  },[props.round])

  return (
    <div className={style.Addscore}>
      <div className={style.Round}>
        <h3>Round 3</h3>
      </div>
      {startRound ? (
        <div className={style.WinDiv}>
          <div style={{ width: "50%" }}>
            <button
              className={style.WinDivButton}
              onClick={() => {
                // setStratRound(false);
                props.handleGame(true);
              }}
            >
              {player1} Won Round
            </button>
          </div>
          <div>
            <button
              className={style.WinDivButton}
              onClick={() => {
                // setStratRound(false);
                props.handleGame(false);
              }}
            >
              {player2} Won Round
            </button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button
            className={style.WinDivButton}
            onClick={() => {
              setStratRound(true);

            }}
          >
            Start New Round
          </button>
        </div>
      )}
    </div>
  );
}

export default Addscore;
