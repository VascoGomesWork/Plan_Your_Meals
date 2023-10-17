import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";

export default function EspacoUtilizadorNav(){
        return(
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><a className="nav-link scrollto active" href="#criar-planos-alimentares"> Criar Novo Plano Alimentar </a></li>
                    <li><a className="nav-link scrollto active" href="#visualizar-planos_alimentares">Visualizar Planos Alimentares</a></li>
                    <li><Link to={'/LoginPage'} className="nav-link">Logout</Link></li>
                </ul>
            </nav>
        )
}