import React from "react";
import {getFullYear, getFooterCopy} from '../utils.js';
import './Footer.css';
import {UserContest} from '../App/AppContext.js';



export default function Footer() {
    const {IsLoggedIn} = UserContest(UserContest);
    return (
        <>
            <footer>
                <div className='App-footer'>
                    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
                    {IsLoggedIn && <p>
                        <a href="/Contact">Contact Us</a>
                    </p>}
                </div> 
            </footer>
        </>
    );
}