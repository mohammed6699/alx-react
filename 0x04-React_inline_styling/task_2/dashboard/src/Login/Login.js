import React from "react";
import { StyleSheet, css } from "aphrodite";
export default function Login() {
    return (
    <>
        <div className={css(AppBody.App_Body)}>
                <p className={css(AppBody.p)}>Login to access the full dashboard</p>
            <div className="login">
                <label className={css(Form.email)} id="email">Email:
                <input type="email"for="email" className={css(Form.em)}/>
                </label>
                <label className={css(Form.password)} id="password">Password:
                <input type="password" for="password" className={css(Form.pass)}/>
                </label>
                <button className={css(Form.button)}>ok</button>
            </div>
        </div>
    </>
    );
}

const AppBody = StyleSheet.create({
    App_Body: {
        marginTop: '50px',
        marginBottom: '500px'
    },
    p: {
        paddingLeft: '50px',
        paddingTop: '20px',
        fontSize: '20px'
    }
})
const Form = StyleSheet.create({
    email:{
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '5px',
        paddingLeft: '50px',
        justifyContent: 'space-between',
        gap: '10px',
        paddingBottom: '100px'        
    },
    em:{
        marginLeft: '10px'
    },
    password:{
        fontSize: '20px',
        marginLeft: '15px',
        fontWeight: 'bold'
    },
    pass:{
        marginLeft: '10px'
    },
    button:{
        marginLeft: '15px'
    }
})
