import React from "react";
import Banner from "./Banner";
import Plan from "./Plans";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

export default function Main(){
    return(
        <div>
            <Header element={"main"}/>
            <Banner page={"Página Inicial"} text={"Na página inicial você pode ver Planos Alimentares já criados e saber um pouco sobre Nós"}/>
            <Plan />
            <About />
            <Footer />
        </div>
    )
}