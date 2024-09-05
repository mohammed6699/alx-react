import logo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>School dashboard</p>
      </header>
      <div className='line'></div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='line-body'></div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div> 
    </>
  );
}

export default App;
