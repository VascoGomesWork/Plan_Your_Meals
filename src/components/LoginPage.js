import React from "react";
import Banner from "./Banner";
import Plan from "./Plans";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

export default function LoginPage(){
    return(
        <div>
            <Header element={"login"}/>
            <Login />
            <Footer />
        </div>
    )
}