
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScoreCardHome from './pages/ScoreCard/Index'
import ScoreCardShow from './pages/ScoreCard/ScoreCardShow'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
           <Route path="/" exact  component={Home} />
           <Route path="/scorecard"  exact component={ScoreCardHome} />
           <Route path="/scorecard/:id" exact component={ScoreCardShow} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
