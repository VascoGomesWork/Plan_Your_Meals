import React from "react";
import ProductAlimentaryPlan from "./ProductAlimentaryPlan";
import EspacoUtilizadorProdutosItem from "./EspacoUtilizadorProdutosItem";

export default function EspacoUtilizadorProdutos(){

    const [produtos, setProdutos] = React.useState([])

    const [produtosFormData, setProdutosForm] = React.useState({
        produto:""
    })

    let productsAlimentaryPlan = []

    function changeProdutosFormData(event){
        const {name, value, type} = event.target

        console.log("Mod")
        setProdutosForm(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    let produtosArray = []
    function submitDataProdutos(event){

        event.preventDefault()

        fetch(`https://api.spoonacular.com/food/products/search?apiKey=87e224df57a14f439d4c4192f67bdb4c&query=${produtosFormData.produto}`)
            .then(res => res.json())
            .then(data => {
                produtosArray = data.products

                for(let i = 0; i < produtosArray.length; i++) {

                    fetch(`https://api.spoonacular.com/food/products/${produtosArray[i].id}?apiKey=87e224df57a14f439d4c4192f67bdb4c`)
                        .then(res => res.json())
                        .then(data => {

                            //Adds Elements to an Object
                            produtosArray[i] = {
                                ...produtosArray[i],
                                imagem:data.image,
                                ingredientList:data.ingredientList
                            }

                            if(i === produtosArray.length - 1){
                                setProdutos(produtosArray)
                            }

                        })

                }
            })
    }

    return(
        <section id="menu" className="menu">
            <div className="container">

                <div className="section-title">
                    <h2>Produtos</h2>
                    <h5>Para introduzir produtos no seu plano alimentar por favor pesquise o produto que deseja</h5>
                    <h5>De seguida carregue no botão '+' para adicionar ao seu plano alimentar</h5>
                </div>

                <div className="row menu-container">
                    <form  className="php-email-form" >
                        <label>Produtos</label>
                        <input type="produto"
                               className="form-control"
                               name="produto"
                               id="produto"
                               placeholder="Pesquise os Produtos"
                               onChange={changeProdutosFormData}
                               value={produtosFormData.produto}
                        />
                        <button id="select-tipo" className="book-a-table-btn scrollto" onClick={submitDataProdutos}>Procurar Produto</button>
                    </form>
                    {produtos.map(produtosAtributes => {
                        return(
                            //How to Convert Function to Stat to be able to use componentDidUpdate
                            //https://www.youtube.com/embed/DPdc5Z-Tf4U?autoplay=1&html5=1&enablejsapi=1&modestbranding=1&rel=0&autohide=1&iv_load_policy=3&wmode=transparent&showinfo=0&cc_load_policy=1&start=7
                            <EspacoUtilizadorProdutosItem produtosAtributes={produtosAtributes}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}