import React from 'react';
import "./dd.css";
import wwlogo from "../images/logo.png"
function Navbar12() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img className="company-logo" src={wwlogo} alt="Company Logo" />
            </div>
        </div>
    );
}

export default Navbar12;