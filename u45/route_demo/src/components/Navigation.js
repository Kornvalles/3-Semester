import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="header">
            <li>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;