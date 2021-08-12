
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddMatchPlayer from './components/Match/AddMatchPlayer';
import AdminHome from './pages/Admin/Index';
import CreateTeam from './pages/Admin/Teams/CreateTeam';
import Team from './pages/Admin/Teams/Team';
import Home from './pages/Home';
import CreateMatch from './pages/Admin/Match/Create';
import MatchesHome from './pages/Admin/Match/Index';
import PlayersHome from './pages/Admin/Players/Index';
import CreatePlayer from './pages/Admin/Players/Create';
import ScoreCardHome from './pages/Admin/ScoreCard/Index';
import ScoreCardShow from './pages/Admin/ScoreCard/ScoreCardShow'
import CreateScore from './pages/Admin/Scores/CreateScore';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
           <Route path="/" exact  component={Home} />
           <Route path="/scorecard"  exact component={ScoreCardHome} />
           <Route path="/scorecard/:id" exact component={ScoreCardShow} />

           <Route path="/admin" exact component={AdminHome} />

           <Route path="/admin/teams" exact component={Team} />
           <Route path="/admin/teams/create" exact component={CreateTeam} />

           <Route path="/admin/players" exact component={PlayersHome} />
           <Route path="/admin/players/create" exact component={CreatePlayer} />
           <Route path="/admin/players/:id/edit" exact component={CreatePlayer} />

           <Route path="/admin/matches" exact component={MatchesHome} />
           <Route path="/admin/matches/create" exact component={CreateMatch} />
           <Route path="/admin/matches/:id/edit" exact component={CreateMatch} />

           <Route path="/admin/matches/:id/addPlayers" exact component={AddMatchPlayer} />

           <Route path="/admin/addScore" exact component={CreateScore} />


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
