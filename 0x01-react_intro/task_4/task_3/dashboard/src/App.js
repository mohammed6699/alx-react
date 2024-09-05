import logo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js';
import Notifications from './Notifications';

function App() {
  return (
    <>
      <Notifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>School dashboard</p>
      </header>
      <div className='line'></div>
      <div className='App-body'>
            <p>Login to access the full dashboard</p>
          <div className="login">
            <label className="email" id="email">Email:
              <input type="email"for="email" className="em"/>
            </label>
            <label className="password" id="password">Password:
              <input type="password" for="password" className="pass"/>
            </label>
            <button>ok</button>
          </div>
      </div>
      <div className='line-body'></div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div> 
    </>
  );
}

export default App;
