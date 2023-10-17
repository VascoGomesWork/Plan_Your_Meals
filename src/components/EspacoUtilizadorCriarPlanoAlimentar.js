import React from "react";
import Banner from "./Banner";
import EspacoUtilizadorReceitas from "./EspacoUtilizadorReceitas";
import EspacoUtilizadorProdutos from "./EspacoUtilizadorProdutos";
import EspacoUtilizadorIngredientes from "./EspacoUtilizadorIngredientes";
import {Link, useNavigate} from "react-router-dom";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import ProductAlimentaryPlan from "./ProductAlimentaryPlan";
import ReceitaAlimentaryPlan from "./ReceitaAlimentaryPlan";
import Utilizador from "./Utilizador";
import Alert from "./Alert";

export default function EspacoUtilizadorCriarPlanoAlimentar(){

    const [formData, setForm] = React.useState({
        nomePlanoAlimentar:"",
        dia:"",
        tipoRefeicao:"",
        tipo:""
    })

    const [alert, setAlert] = React.useState(false)

    //let username = Utilizador.getUtilizadorEmail()
    let username = "teste3"
    //let hash = Utilizador.getUtilizadorHash()
    let hash = "41e444a4255db3e934dfc922ead5aadac5bbd5e1"

    /**
     * Resume: Function that changes form data
     * @param event
     */
    function changeFormData(event){
        const {name, value, type} = event.target
        setForm(prevFormData => ({
                ...prevFormData,
                [name]: value
            })
        )
        console.log(formData)
    }

    const [receitas, setReceitas] = React.useState(false)
    const [produtos, setProdutos] = React.useState(false)
    const [ingredientes, setIngredientes] = React.useState(false)

    /**
     * Resume: Function that shows the selected component from select element
     */
    function selectType(){
        //https://bobbyhadz.com/blog/react-onclick-show-component
        if(formData.tipo === "receitas"){
            setReceitas(currentValue => !currentValue)
        } else if(formData.tipo === "produtos"){
            setProdutos(currentValue => !currentValue)
        } else {
            setIngredientes(currentValue => !currentValue)
        }
    }

    /**
     * Resume: Function that closes a component
     * @param event
     */
    function closeField(event){
        console.log("Event = " + event.target.name)
        if(event.target.value === receitas){
            setReceitas(false)
        } else if(event.target.value === produtos){
            setProdutos(false)
        } else {
            setIngredientes(false)
        }
    }

    /**
     * Resume: Function that makes the POST Request to the API
     * @param event
     */
    function submitData(event) {
        event.preventDefault()

        if(formData.tipoRefeicao === ""){
            formData.tipoRefeicao = 1
        }
        let alimentaryPlanArray = [IngredicentAlimentaryPlan.getIngredienteArrayObject(), ProductAlimentaryPlan.getProductArrayObject(), ReceitaAlimentaryPlan.getReceitaArrayObject()]

        //CORS ERROR
        //https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
        //https://web.dev/i18n/en/cross-origin-resource-sharing/
        //https://youtu.be/j1xJaIjEkxg
        for (let i = 0; i < alimentaryPlanArray.length; i++) {
            for (let k = 0; k < alimentaryPlanArray[i].length; k++){
                fetch(`https://api.spoonacular.com/mealplanner/${username}/templates?apiKey=87e224df57a14f439d4c4192f67bdb4c&hash=${hash}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        "name": formData.nomePlanoAlimentar,
                        "items": [
                            {
                                "day": parseInt(formData.dia),
                                "slot": formData.tipoRefeicao,
                                "position": 0,
                                "type": "RECIPE",
                                "value": {
                                    "id": 296213,
                                    "servings": 1,
                                    "title": alimentaryPlanArray[i][k],
                                    "imageType": "jpg"
                                }
                            }
                        ]
                    }), // body data type must match "Content-Type" header
                }).then((response) => {
                    return response.json();
                }).then((parsedData) => {
                    console.log("Meal Plan ID = " + parsedData.mealPlan.id)
                    setAlert(prevState => !prevState)
                })
            }
        }
    }

    return(
        <div>
            <form  className="php-email-form" onSubmit={submitData}>
                <div className="text-center">
                    <h1 id="criar-planos-alimentares">Criar Novo Plano Alimentar</h1>
                    <h4>Preencha os campos abaixo com as informações necessárias para criar o seu plano alimentar</h4>
                </div>
                <div className="text-center">
                    <div className="form-group">
                        <label>Nome Plano Alimentar</label>
                        <input
                            type="nomePlanoAlimentar"
                            name="nomePlanoAlimentar"
                            className="form-control"
                            id="nomePlanoAlimentar"
                            placeholder="Nome Plano Alimentar"
                            onChange={changeFormData}
                            value={formData.nomePlanoAlimentar}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Dia</label>
                        <input type="date"
                               id="dia"
                               className="form-control"
                               name="dia"
                               placeholder="Escolha o Dia Pretendido"
                               onChange={changeFormData}
                               value={formData.dia}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Tipo de Refeição</label>
                        <select size={3} className="form-control" id="tipoRefeicao" name="tipoRefeicao" onChange={changeFormData} value={formData.tipoRefeicao}>
                            <option selected value="1" >Pequeno Almoço</option>
                            <option value="2">Almoço</option>
                            <option value="3">Jantar</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label>Tipo</label>
                        <select size={3} className="form-control" id="tipo" name="tipo" onChange={changeFormData} value={formData.tipo}>
                            <option value="ingredientes" >Ingredientes</option>
                            <option value="receitas">Receitas</option>
                            <option value="produtos">Produtos</option>
                        </select>
                        <p></p>
                        <h4>Para selecionar o tipo de produto, ingrediente ou receita que deseja, selecione o desejado da caixa de escolha de tipos e carregue em "Selecionar Tipo"</h4>
                        <a type="button" onClick={selectType} className="book-a-table-btn scrollto" id="select-tipo">Selecionar Tipo</a>


                        {
                            receitas && <div><a type="button" name={receitas} onClick={closeField} value={receitas}></a><EspacoUtilizadorReceitas /></div>
                        }

                        {
                            produtos && <div><a type="button" onClick={closeField} value={produtos}></a><EspacoUtilizadorProdutos /></div>
                        }

                        {
                            ingredientes && <div><a type="button" onClick={closeField} value={ingredientes}></a><EspacoUtilizadorIngredientes /></div>
                        }

                    </div>
                </div>
                <div className="text-center">
                    <button className="book-a-table-btn scrollto">Criar Novo Plano Alimentar</button>
                    {alert && <Alert id="alert" props={"Plano Alimentar Criado com Sucesso"}/>}
                </div>
            </form>
        </div>
    )
}