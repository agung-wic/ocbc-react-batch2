// import logo from './logo.svg';
import './App.css';
import ClockClass from './components/clockclasscomponent';
import ClockFunction from './components/clockfunctionalcomponent';

function App() {
  return (
    <div className='container'>
      <ClockFunction />
      <hr />
      <ClockClass />
    </div>  

  );
}

export default App;
