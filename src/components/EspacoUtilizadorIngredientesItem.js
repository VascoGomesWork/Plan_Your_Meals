import React from "react";
import Alert from "./Alert";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";

export default class EspacoUtilizadorIngredientesItem extends React.Component{

    constructor(props) {
        super(props);
        this.ingredicentAlimentaryPlan = []
        this.state = {alert:false}
    }

    addIngredient(ingredientesAtributes){
        this.ingredicentAlimentaryPlan.push(ingredientesAtributes)

        //How to Pass Data from a Component to Another
        //https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
        IngredicentAlimentaryPlan.setIngredientArray(this.ingredicentAlimentaryPlan)

        //Update State
        console.log("CLICKING")

        this.setState({alert:true})

    }

    componentDidUpdate(){
        setTimeout(() => this.setState({alert:false}), 3000);
    }

    render(){
        return(
        <div className="menu-item filter-starters">
            <div className="menu-content">
                {
                    //https://bobbyhadz.com/blog/react-onclick-pass-event-and-parameter
                    //How to pass parameters in onclick in react function
                }
                <im alt="Imagem Relativa a Ingrediente" src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredientesAtributes.image}`} />
                <h4 style={{"margin-top":"7%"}}>{this.props.ingredientesAtributes.name}</h4><span style={{"margin-top":"9%", "background-color":"#ffb03b"}} className="back-to-top d-flex align-items-center justify-content-center active"onClick={event => this.addIngredient(this.props.ingredientesAtributes)}>+</span>
            </div>
            <div className="menu-ingredients">
                <p>Consistencia: {this.props.ingredientesAtributes.consistencia}</p>
                {this.state.alert && <Alert id="alert" props={"Ingrediente Adicionado com Sucesso"}/>}
                {/*IngredicentAlimentaryPlan.getIngredienteArrayObject().length != 0 ? IngredicentAlimentaryPlan.getIngredienteArrayObject()[0].name : "Não Há Nada"*/}
            </div>
        </div>
        )
    }

    }