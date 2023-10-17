import React from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import LoginNav from "./LoginNav";
import EspacoUtilizadorNav from "./EspacoUtilizadorNav";

export default function Header(props){
    let nav_component=""
    if(props.element === "main"){
        nav_component = <Nav />
    } else if(props.element === "espaco_utilizador"){
        nav_component = <EspacoUtilizadorNav />
    }
    else {
        nav_component = <LoginNav />
    }
    return(
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <div className="logo me-auto">
                    <h1><Link to={'/'} className="nav-link">Plan Your Meals</Link></h1>
                </div>
                {nav_component}
            </div>
        </header>
    )
}