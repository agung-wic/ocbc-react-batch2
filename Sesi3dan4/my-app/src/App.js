import logo from './logo.svg';
import './App.css';
// import Hero from './components/hero';
// import Users from './components/user';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Users /> */}
        <Hero name = 'Captain America' logo={logo}/>
      </header>
    </div>
  );
}

export default App;
