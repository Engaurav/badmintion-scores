import { useState } from 'react';
import Newgame from '../smallcomponents/Newgame';
import Start from '../smallcomponents/Start';
import '../styles/App.css';
import Game from './Game'
import Navbar from './Navbar';

function App() {
  const [showStart,setShowStart] = useState(false);
  const [scorecard,setScorecard] = useState({});
  const [live,setLive] = useState(false);
  const [showGame,setShowGame] = useState(false);

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
          player1currentscore:2,
          player2currentscore:2,
          points : [
            {
              player1point : 1,
              player2point : 0,
              won : true
            },
            {
              player1point : 1,
              player2point : 1,
              won : false
            },
            {
              player1point : 1,
              player2point : 2,
              won : false
            },
            {
              player1point : 2,
              player2point : 2,
              won : true
            }
        ]}]
      ,

    }
    await setScorecard(data);
    await setLive(true);
    await setShowGame(true);
    
  }

  return (
    <div className="App">
      <Navbar />
      {showStart ? '' :  live ? '' : <Newgame setShowStart={setShowStart}/>}
      {showStart ? <Start handleNewGame={handleNewGame} setShowStart={setShowStart}/> : live ? '' : <h1>Game History</h1>}
      
      { showGame ? live ?  <Game scorecard={scorecard} live={live}/> : <Game scorecard={scorecard} live={live}/> : ''}
    </div>
  );
}

export default App;
