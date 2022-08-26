import { useState } from 'react';
import Newgame from '../smallcomponents/Newgame';
import Start from '../smallcomponents/Start';
import '../styles/App.css';
import Navbar from './Navbar';

function App() {
  const [showStart,setShowStart] = useState(false);
  return (
    <div className="App">
      <Navbar />
      {showStart ? '' :  <Newgame setShowStart={setShowStart}/>}
      {showStart ? <Start setShowStart={setShowStart}/> : <h1>Game History</h1>}
    </div>
  );
}

export default App;
