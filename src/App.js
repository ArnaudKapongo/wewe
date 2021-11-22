import './Login.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Rating from './components/Rating';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <nav className="navbar" >
         <p className="wemoovteams">Wemoov Teams</p>
         
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/rating" component={Rating} />
        </nav>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
