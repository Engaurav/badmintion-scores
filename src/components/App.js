import { useState } from 'react';
import Newgame from '../smallcomponents/Newgame';
import Start from '../smallcomponents/Start';
import '../styles/App.css';
import Game from './Game'
import GameHistory from './GameHistory';
import Navbar from './Navbar';

function App() {
  const [showStart,setShowStart] = useState(false);
  const [scorecard,setScorecard] = useState({});
  const [live,setLive] = useState(false);
  const [showGame,setShowGame] = useState(false);
  const [showGameHistory,setShowGameHistory] = useState(true);

  const handleNewGame =async (player1,player2) => {
    await setShowStart(false);
    await setShowGame(false);

    const data =await {
      player1,
      player2,
      player1set : 0,
      player2set : 0,
      rounds : [
        {
          player1currentscore:0,
          player2currentscore:0,
          points : [
            // {
              // player1point : 1,
              // player2point : 0,
              // won : true
            // }
        ]}]
      ,

    }
    await setScorecard(data);
    await setLive(true);
    await setShowGame(true);
    await setShowGameHistory(false);
    
  }

  const handleGameDetail = (val) => {
    console.log(val);
    setScorecard(val);
    setShowGame(true);
    setLive(false);
    setShowGameHistory(false);
  }

  return (
    <div className="App">
      <Navbar />
      {showStart ? '' :  live ? '' : showGameHistory ? <Newgame setShowStart={setShowStart}/> : ''}
      {showStart ? <Start handleNewGame={handleNewGame} setShowStart={setShowStart}/> : live ? '' : showGameHistory ? <GameHistory handleGameDetail={handleGameDetail} /> : ''}
      { showGame ? live ?  <Game scorecard={scorecard} live={live}/> : <Game scorecard={scorecard} live={false}/> : ''}
    </div>
  );
}

export default App;
