import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Users from './pages/Users';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Why do we need test ?</p>
        </header>
        <div>
          <Switch>
            <Route path='/' exact component={Home}>
            </Route>
            <Route path="/users" component={Users} />
            <Redirect path='/**' to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
