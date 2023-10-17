import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";

export default function LoginNav(){
        return(
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><Link to={'../LoginPage'} className="nav-link"> Login </Link></li>
                    <li><Link to={'../SignUpPage'} className="nav-link">Sign Up</Link></li>
                </ul>
            </nav>
        )
}