import logo from './logo.svg'
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Counter from './pages/Counter';
import States from './pages/States';
import Todos from './pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className='App-logo' />

          <ul>
            <li><NavLink to='/' exact>Counter</NavLink></li>
            <li><NavLink to='/states' exact>States</NavLink></li>
            <li><NavLink to='/todos'>Todos</NavLink></li>
          </ul>
        </header>
      </div>
      <Switch>
        <Route path="/" exact>
          <Counter />
        </Route>
        <Route path="/states" exact>
          <States />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
