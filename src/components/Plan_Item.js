import React from "react";
import LoginPage from "./LoginPage";

export default function Plan_Item(){
    const [food, setFood] = React.useState([])

    //https://api.spoonacular.com/mealplanner/generate?apiKey=f5028b2a056a4853b0a8134bc6b67523
    React.useEffect(() => {
        fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=f5028b2a056a4853b0a8134bc6b67523")
            .then(res => res.json())
            .then(data => {
                let foodArray = data.week.friday.meals

                console.log("Food Array = "+foodArray)
                setFood(foodArray)
            })
    }, [])
    return(
        food.map(foodAtributes => (
            <div className="col-lg-4">
                <div className="box" >
                    {/* IMG End Point https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}*/}
                    <img src={`https://spoonacular.com/recipeImages/${foodAtributes.id}-312x231.${foodAtributes.imageType}`} alt="Imagem de Planos Alimentares"/>
                    <h4>Título:</h4><p>{foodAtributes.title}</p>
                    <h4>Duração:</h4><p>{foodAtributes.readyInMinutes}min</p>
                    <h4>Doses:</h4><p>{foodAtributes.servings}</p>
                    <h4>URL:</h4><a href={foodAtributes.sourceUrl}>{foodAtributes.sourceUrl}</a>
                </div>
            </div>
        ))
    )
}