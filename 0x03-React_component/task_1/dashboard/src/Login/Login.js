import React from "react";
import './Login.css';

export default function Login() {
    return (
    <>
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
    </>
    );
}