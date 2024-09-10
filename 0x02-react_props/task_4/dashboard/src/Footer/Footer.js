import React from "react";
import {getFullYear, getFooterCopy} from '../utils.js';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='App-footer'>
                    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
                </div> 
            </footer>
        </>
    );
}