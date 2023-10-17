import React from "react";
import Utilizador from "./Utilizador";

export default function EspacoUtilizadorVisualizarDetalhesPlanosAlimentares(props){

    //Renderizar Detalhes 1 de Cada Vez
    //https://scrimba.com/learn/learnreact/boxes-challenge-part-31-local-state-co0264ad6929a556e38a6a10f
    const [plansDisplayInfo, setPlansDisplayInfo] = React.useState(false)
    const [plansInfo, setPlansInfo] = React.useState([])
    let apiKey = "12c5cff8e3444d849402a3d0c65bc985"
    let username = "teste3"
    let hash = "41e444a4255db3e934dfc922ead5aadac5bbd5e1"

    function getPlansDetails(event, id){
        //https://api.spoonacular.com/mealplanner/{username}/templates/{id}
        fetch(`https://api.spoonacular.com/mealplanner/${username}/templates/${id}?apiKey=${apiKey}&hash=${hash}`)
            .then(res => res.json())
            .then(data => {
                console.log("LENGHT = " + data.days.length)
                console.log("Plans ID INFO = " + data.id)
            if(data.days.length !== undefined || data.days.length > 0){
                for (let i = 0; i < data.days.length; i++){
                    for (let j = 0; j < data.days[i].items.length; j++) {

                        if(data.days[i].items[j].value.title.name === undefined){
                            setPlansDisplayInfo(prevData => !prevData)
                            let dataArray = [data.days[i].items[0].value.title.title, data.days[i].items[0].value.servings, data.days[i].items[0].value.title.summary, data.days[i].items[0].value.title.image]
                            if(data.days[i].items[0].value.title.summary === undefined){
                                data.days[i].items[0].value.title.summary = ""
                            }
                            setPlansInfo(dataArray)
                        } else {
                            setPlansDisplayInfo(prevData => !prevData)
                            let dataArray = [data.days[i].items[0].value.title.name, data.days[i].items[0].value.servings, data.days[i].items[0].value.title.consistencia, data.days[i].items[0].value.title.image]
                            if(data.days[i].items[0].value.title.consistencia === undefined){
                                data.days[i].items[0].value.title.consistencia = ""
                            }
                            setPlansInfo(dataArray)
                        }
                    }
                }
            }
            })
    }

    return(
        <div className="menu-item filter-starters">
            <div className="menu-content">
                {
                    //How to pass data to a function as argument in react
                    //https://bobbyhadz.com/blog/react-onclick-pass-event-and-parameter
                }
                <a onClick={event => getPlansDetails(event, props.planosAtributes.id)}>{props.planosAtributes.name}</a>
            </div>
            <div className="menu-ingredients">
                {/* Renders Image Conditionally*/}
                {plansDisplayInfo && <div><img alt="Imagem Relativa ao Plano Alimentar" src={plansInfo[3].includes("http") ? plansInfo[3] : "https://spoonacular.com/cdn/ingredients_100x100/"+plansInfo[3]}></img></div>}
                {plansDisplayInfo && <div><h4>Nome: </h4><p>{plansInfo[0]}</p></div>}
                {plansDisplayInfo && <div><h4>Doses: </h4><p>{plansInfo[1]}</p></div>}
            </div>
        </div>
    )
}