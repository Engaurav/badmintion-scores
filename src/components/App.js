import Newgame from '../smallcomponents/Newgame';
import '../styles/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newgame/>
      <h1>Badminton Scorecard</h1>
    </div>
  );
}

export default App;
