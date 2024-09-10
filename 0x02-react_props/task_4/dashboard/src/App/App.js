
import './App.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Login/Login.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import NotificationItem from '../Notifications/NotificationItem.js';
function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />  
      </div>
      <div className='line'></div>
      <div className='.App-body'>
        <Login />
        <NotificationItem />
        </div>
      <div className='line-body'></div>
      <div className='App-footer'>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
