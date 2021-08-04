
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Achivements from './components/Achivement';
import Header from './components/Header';
import Location from './components/Location';
import Matches from './components/Matches';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <Header />
      <Matches />
      <Achivements />
      <Players />
      <Location />
    </div>
  );
}

export default App;
