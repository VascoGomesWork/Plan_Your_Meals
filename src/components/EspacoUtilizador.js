import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import EspacoUtilizadorCriarPlanoAlimentar from "./EspacoUtilizadorCriarPlanoAlimentar";
import EspacoUtilizadorVisualizarPlanosAlimentares from "./EspacoUtilizadorVisualizarPlanosAlimentares";

export default function EspacoUtilizador(){

    return(
    <div>
        <EspacoUtilizadorCriarPlanoAlimentar />
        <EspacoUtilizadorVisualizarPlanosAlimentares />
    </div>
    )
}