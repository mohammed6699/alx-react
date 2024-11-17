import React from "react";
import logo from '../holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

export default function Header() {
    return(
        <>
            <header className={css(AppHeader.header)}>
                <img src={logo} alt="logo" className={css(logoStyle.logo)}/>
                <p className={css(paragraph.p)}>School dashboard</p>
            </header>
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