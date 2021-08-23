﻿import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import '../../../styles/App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;