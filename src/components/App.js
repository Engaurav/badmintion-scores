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
          player1currentscore:0,
          player2currentscore:0,
          points : [
            // {
            //   player1point1 : 0,
            //   player2point1 : 0,
            //   won : 0
            // }
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
