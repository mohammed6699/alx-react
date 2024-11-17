import React from "react";
import logo from '../holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import { UserContest } from '..App/AppContext';

    const contextType = UserContest;
export default function Header() {
   const {user, logOut} = this.context;
    return(
        <>
            <header className={css(AppHeader.header)}>
                <div {user.isLoggedIn} />
                <img src={logo} alt="logo" className={css(logoStyle.logo)}/>
                <p className={css(paragraph.p)}>School dashboard</p>
            </header>
            <p>{user.email}</p>
        </>
    );
}
const logoStyle = StyleSheet.create({
    logo: {
        width: '150px',
        height: '150px'
    }
})

const AppHeader = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'flex-start'
    }
})
const paragraph = StyleSheet.create({
    p: {
        fontSize: '50px',
        color: 'red',
        fontWeight: '600',
        padding: '150px 70px 0 0'
    }
})