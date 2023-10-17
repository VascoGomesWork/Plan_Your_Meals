import React from "react";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import EspacoUtilizadorVisualizarDetalhesPlanosAlimentares from "./EspacoUtilizadorVisualizarDetalhesPlanosAlimentares";
import Utilizador from "./Utilizador";

export default function EspacoUtilizadorVisualizarPlanosAlimentares(){

    const [planos, setPlanos] = React.useState([])
    let apiKey = "12c5cff8e3444d849402a3d0c65bc985"

    //let username = Utilizador.getUtilizadorEmail()
    //let username = "admin1"
    let username = "teste3"
    //let hash = Utilizador.getUtilizadorHash()
    let hash = "41e444a4255db3e934dfc922ead5aadac5bbd5e1"
    //let hash = "9f0397217c22828795be05bbbae07c0e8b6637cc"

    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/mealplanner/${username}/templates?apiKey=${apiKey}&hash=${hash}`)
            .then(res => res.json())
            .then(data => {
                setPlanos(data.templates)
            })
    }, [])



    return(
        <section id="menu" className="menu">
            <div className="container">

                <div className="section-title">
                    <h2 id="visualizar-planos_alimentares">Visualizar <span>Planos Alimentares</span></h2>
                    <h4>Nesta secção pode visualizar os planos alimentares criados</h4>
                    <h4>Para isso basta clicar em cima do nome do plano alimentar ao qual você pretende verificar os detalhes</h4>
                </div>

                <div className="row menu-container">

                    {planos.map(planosAtributes => {
                        return (
                            <EspacoUtilizadorVisualizarDetalhesPlanosAlimentares planosAtributes={planosAtributes}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}