import logo from "./alien.jpg" ;
import './App.css';
import Agua from './Agua';
import ReactPlayer from 'react-player';
import Calendar from 'react-calendar/dist/umd/Calendar';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Agua/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        HOLOLOLO
        <Calendar/>
        <ReactPlayer url="https://www.youtube.com/watch?v=vAvCcjSAGDY" playing={true} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Agua/>
          Learn React holaaaa lgg
        </a>
        <Agua/>
      </header>
    </div>
  );
}

export default App;
