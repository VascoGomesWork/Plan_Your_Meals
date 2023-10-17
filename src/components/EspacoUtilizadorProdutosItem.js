import React from "react";
import Alert from "./Alert";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import ProductAlimentaryPlan from "./ProductAlimentaryPlan";

export default class EspacoUtilizadorProdutosItem extends React.Component{

    constructor(props) {
        super(props);
        this.productsAlimentaryPlan = []
        this.state = {alert:false}
    }

    addProdutos(produtosAtributes){
        this.productsAlimentaryPlan.push(produtosAtributes)

        //How to Pass Data from a Component to Another
        //https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
        ProductAlimentaryPlan.setProductArrayObject(this.productsAlimentaryPlan)

        //Update State
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
                    <img alt="Imagem Relativa a Produto" src={this.props.produtosAtributes.image} />
                    <h4 style={{"margin-top":"7%"}}>{this.props.produtosAtributes.title}</h4><span style={{"margin-top":"9%", "background-color":"#ffb03b"}} className="back-to-top d-flex align-items-center justify-content-center active"onClick={event => this.addProdutos(this.props.produtosAtributes)}>+</span>
                </div>
                <div className="menu-ingredients">
                    <p>Consistencia: {this.props.produtosAtributes.consistencia}</p>
                    {this.state.alert && <Alert id="alert" props={"Produto Adicionado com Sucesso"}/>}
                    {/*IngredicentAlimentaryPlan.getIngredienteArrayObject().length != 0 ? IngredicentAlimentaryPlan.getIngredienteArrayObject()[0].name : "Não Há Nada"*/}
                </div>
            </div>
        )
    }

}