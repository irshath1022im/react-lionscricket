
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminHome from './pages/Admin/Index';
import Home from './pages/Home';
import CreateMatch from './pages/Match/Create';
import MatchesHome from './pages/Match/Index';
import CreatePlayer from './pages/Players/Create';
import PlayersHome from './pages/Players/Index';
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

           <Route path="/admin" exact component={AdminHome} />

           <Route path="/admin/players" exact component={PlayersHome} />
           <Route path="/admin/players/create" exact component={CreatePlayer} />
           <Route path="/admin/players/:id/edit" exact component={CreatePlayer} />

           <Route path="/admin/matches" exact component={MatchesHome} />
           <Route path="/admin/matches/create" exact component={CreateMatch} />


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
