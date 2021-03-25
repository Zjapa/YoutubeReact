import React from 'react';
import './Header.css';
import logo from '../../images/youtube.png';
import { useDebouncedCallback } from 'use-debounce';


const Header = (props) => {
    return (
        <>
            <header>
                <div className="container">
                    <img src={logo} alt="Logo" />
                    <input id="srch"  onChange = {e => {setTimeout(()=>props.getInput(e.target.value),1000)}}/>                            
                </div>
            </header>
        </>
    )
}
export default Header;