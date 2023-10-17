import React from "react";
import Alert from "./Alert";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import ProductAlimentaryPlan from "./ProductAlimentaryPlan";
import ReceitaAlimentaryPlan from "./ReceitaAlimentaryPlan";

export default class EspacoUtilizadorReceitasItem extends React.Component{

    constructor(props) {
        super(props);
        this.receitasAlimentaryPlan = []
        this.state = {alert:false}
    }

    addReceitas(receitasAtributes){
        this.receitasAlimentaryPlan.push(receitasAtributes)

        //How to Pass Data from a Component to Another
        //https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
        ReceitaAlimentaryPlan.setReceitaArray(this.receitasAlimentaryPlan)

        this.setState({alert:true})
    }

    componentDidUpdate(){
        setTimeout(() => this.setState({alert:false}), 3000);
    }

    render(){
        return(
            <div className="row menu-container">
                <div className="menu-item filter-starters">
                    <div className="menu-content">
                        <img alt="Imagem Relativa a Receita" src={this.props.receitasAtributes.image}/>
                        <h4 style={{"margin-top":"7%"}}>{this.props.receitasAtributes.title}</h4><span style={{"margin-top":"9%", "background-color":"#ffb03b"}} className="back-to-top d-flex align-items-center justify-content-center active"onClick={event => this.addReceitas(this.props.receitasAtributes)}>+</span>
                    </div>
                    <div className="menu-content">
                        {/* Set Dangerously HTML https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/ */}
                        <div dangerouslySetInnerHTML={{__html: this.props.receitasAtributes.summary}} />

                    </div>
                    {this.state.alert && <Alert id="alert" props={"Receita Adicionada com Sucesso"}/>}
                </div>
            </div>
        )
    }

}