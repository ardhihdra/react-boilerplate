import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm.jsx';
import './Login.css';

export default function Login({ setToken }) {
    return (
        <div className="ds-flow">
            {/* <div className="illustration">illustration</div> */}
            <div className="main-section pages-container">
                <div id="title" className="search-title ds-pt-6"><a href="/">Your Apps</a></div>
                <div id="subtitle" className="search-subtitle">your apps desc</div>
                
                <div className="ds-border form-container ds-p-3">
                    <LoginForm setToken={setToken}/>
                </div>
            </div>     
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}