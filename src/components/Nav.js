import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";

export default function Nav(){
        return(
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><a className="nav-link scrollto active" href="#planos_alimentares">Planos Alimentares</a></li>
                    <li><a className="nav-link scrollto" href="#sobre_nos">Sobre Nós</a></li>
                    <li><Link to={'./LoginPage'} className="nav-link">Login</Link></li>
                    <li><Link to={'./SignUpPage'} className="nav-link">Sign Up</Link></li>
                    <li><Link to={'./EspacoUtilizadorPage'} className="nav-link">Espaço do Utilizador</Link></li>
                </ul>
            </nav>
        )
}