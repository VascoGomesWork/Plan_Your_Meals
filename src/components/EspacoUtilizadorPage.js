import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import EspacoUtilizador from "./EspacoUtilizador";
import Banner from "./Banner";


export default function EspacoUtilizadorPage(){
    return(
        <div>
            <Header element={"espaco_utilizador"}/>
            <Banner page={"Espaço do Utilizador"} text={"No Espaço do Utilizador é possível Criar Novos Planos Alimentares, e Visualizar Planos Alimentares"}/>
            <EspacoUtilizador />
            <Footer />
        </div>
    )
}