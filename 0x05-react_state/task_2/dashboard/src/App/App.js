import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import NotificationItem from '../Notifications/NotificationItem.js';
import NotificationsTable from '../Notifications/NotificationsTable.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import { UserContest } from './AppContext.js';
// import { useState } from 'react';
// import { computeHeadingLevel } from '@testing-library/react';

class App extends Component {
 static defaultProps = {
  logout: () => {},
 };
 constructor (props){
  super(props);
  this.state = {
    displayDrawer: false,
    user: {
      email: "",
      password: "",
    },
    listNotifications: [
    {id: 1, type: "default", value: "List_one"},
    {id: 2, type: "default", value: "List_two"},
    {id: 3, type: "default", value: "List_three"},
  ]
  }
  
  this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
  this.handleHideDrawer = this.handleHideDrawer.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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
  };
  
 }
 handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  };
  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }
  logIn(email, password) {
    this.setState({user: {email, password, isLoggedIn: true}});
  };
  logOut(){
    this.setState({user: {email: "", password: "", isLoggedIn: true}});
  };
  markNotificationAsRead(id){
    this.setState((prevState) => {
       const listNotifications = prevState.listNotifications.filter(
        (notification) => notification.id !== id
       );
    })
  }
  render () {
    const {user, displayDrawer} = this.state;
  return (
  <UserContest.Provider value={{user, logOut: this.logOut}} >
    <>
    
    <NotificationItem />
      <Notifications 
      displayDrawer = {displayDrawer}
      handleDisplayDrawer = {this.state.handleDisplayDrawer}
      handleHideDrawer = {this.state.handleHideDrawer}
      listNotifications = {this.listNotifications}
      markNotificationAsRead = {this.markNotificationAsRead}
      />
      <div className={css(bodyStyles.App)}>
        <Header />  
      </div>
      <div className='line'></div>
      <div className='App-body'>
      <BodySectionWithMarginBottom tittle="Log in to continue">
        <Login logIn={this.logIn}/>
      </BodySectionWithMarginBottom>
        </div>
      <div className='line-body'></div>
      <div className="App-body">
      <BodySectionWithMarginBottom tittle="Course list">
        <NotificationsTable />
      </BodySectionWithMarginBottom>
      <BodySection tittle="News from the School">
          <p>the new year of school starts now</p>
          <p>let's get started</p>
      </BodySection>
      </div>
      <div className='line-body'></div>
      <div className css={(footerStyles.Footer)}>
        <Footer />
      </div> 
    </>
    </UserContest.Provider>
  );
}
}

const bodyStyles = StyleSheet.create({
  App: {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fffff',
  }
});

const footerStyles = StyleSheet.create({
  Footer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    padding: '1rem',
    borderTop: '3px solid red'
  }
});
export default App;
