import React from "react";
import logo from '../holberton-logo.jpg';
import './Header.css';

export default function Header() {
    return(
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>School dashboard</p>
            </header>
        </>
    );
}