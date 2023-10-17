import React from "react";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import Utilizador from "./Utilizador";
import Alert from "./Alert";
import EspacoUtilizadorIngredientesItem from "./EspacoUtilizadorIngredientesItem";

export default function EspacoUtilizadorIngredientes(){

    let apiKey = "686c739df07f49498543b47c066c65ed"
    const [ingredientes, setIngredientes] = React.useState([])
    const [ingredientsFormData, setIngredientsForm] = React.useState({
        ingrediente:""
    })

    function changeIngridientsFormData(event){
        const {name, value, type} = event.target

        setIngredientsForm(prevData => ({
            ...prevData,
            [name]: value
        }))

        console.log("Ingredientes = " + ingredientes)
    }

    let ingredientsArray = []
    function submitDataIngridient(event){

        event.preventDefault()

        if(ingredientsFormData.ingrediente.length > 0) {
            fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${ingredientsFormData.ingrediente}`)
                .then(res => res.json())
                .then(data => {
                    ingredientsArray = data.results
                    if(data.results.length > 0){
                        for (let i = 0; i < ingredientsArray.length; i++) {
                            fetch(`https://api.spoonacular.com/food/ingredients/${ingredientsArray[i].id}/information?apiKey=${apiKey}`)
                                .then(res => res.json())
                                .then(data => {

                                    //Adds Elements to an Object
                                    ingredientsArray[i] = {
                                        ...ingredientsArray[i],
                                        imagem: data.image,
                                        consistencia: data.consistency
                                    }

                                    if (i === ingredientsArray.length - 1) {
                                        setIngredientes(ingredientsArray)
                                    }
                                })
                        }
                    } else {
                        //setNotificacao(prevState => !prevState)
                    }
                })
        }
        else {
            //setNotificacao(prevState => !prevState)
        }
    }

    return(
        <section id="menu" className="menu">
            <div className="container">

                <div className="section-title">
                    <h2>Ingredientes</h2>
                    <h5>Para introduzir ingredientes no seu plano alimentar por favor pesquise o ingrediente que deseja</h5>
                    <h5>De seguida carregue no botão '+' para adicionar ao seu plano alimentar</h5>
                </div>

                <div className="row menu-container" styles={{"margin-top":"0%;"}}>
                    <form  className="php-email-form" >
                        <label>Ingredientes</label>
                        <input type="ingrediente"
                               className="form-control"
                               name="ingrediente"
                               id="ingrediente"
                               placeholder="Pesquise os Ingrediente"
                               onChange={changeIngridientsFormData}
                               value={ingredientsFormData.ingrediente}
                        />
                        <button id="select-tipo" className="book-a-table-btn scrollto" onClick={submitDataIngridient}>Procurar Ingrediente</button>
                    </form>
                    {ingredientes.map(ingredientesAtributes => {
                        return(
                            //How to Convert Function to Stat to be able to use componentDidUpdate
                            //https://www.youtube.com/embed/DPdc5Z-Tf4U?autoplay=1&html5=1&enablejsapi=1&modestbranding=1&rel=0&autohide=1&iv_load_policy=3&wmode=transparent&showinfo=0&cc_load_policy=1&start=7
                            <EspacoUtilizadorIngredientesItem ingredientesAtributes={ingredientesAtributes}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}