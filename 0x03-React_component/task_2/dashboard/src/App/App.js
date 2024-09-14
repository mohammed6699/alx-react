import React, { Component } from 'react';
import './App.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Login/Login.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import NotificationItem from '../Notifications/NotificationItem.js';
import NotificationsTable from '../Notifications/NotificationsTable.js';
// import { computeHeadingLevel } from '@testing-library/react';

class App extends Component {
 static defaultProps = {
  logout: () => {},
 };
  constructor (props){
  super(props);
  this.handleKeyPress = this.handleKeyPress.bind(this);
 }
 componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress);
 }
 componentWillUnmount() {
  document.addEventListener('keydown', this.handleKeyPress);
 }
 handleKeyPress(Event){
  if (Event.ctrlkey && Event.key === 'h'){
    alert('Logging you out');
    this.props.logout();
  }
 }
  render () {
  return (
    <>
    <NotificationItem />
      <Notifications />
      <div className='App'>
        <Header />  
      </div>
      <div className='line'></div>
      <div className='App-body'>
        <Login/>
        </div>
      <div className='line-body'></div>
      <div className="App-body">
        <NotificationsTable />
      </div>
      <div className='line-body'></div>
      <div className='App-footer'>
        <Footer />
      </div>
      
    </>
  );
}
}
export default App;
