import React from "react";
import IngredicentAlimentaryPlan from "./IngredicentAlimentaryPlan";
import ReceitaAlimentaryPlan from "./ReceitaAlimentaryPlan";
import EspacoUtilizadorReceitasItem from "./EspacoUtilizadorReceitasItem";

export default function EspacoUtilizadorReceitas(){

    let apiKey = "c936f6781d2f41c293bf0959d2574d9a"
    const [receitas, setReceitas] = React.useState([])
    let receitasAlimentaryPlan = []
    let receitasArray = []
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=f5028b2a056a4853b0a8134bc6b67523
    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                receitasArray = data.results
                    let idArray = receitasArray.map(receitasAtributes2 => (receitasAtributes2.id))
                    for(let i = 0; i < idArray.length; i++) {
                        fetch(`https://api.spoonacular.com/recipes/${idArray[i]}/information?apiKey=${apiKey}&includeNutrition=false`)
                            .then(res => res.json())
                            .then(data => {
                                //Adds Elements to an Object
                                receitasArray[i] = {
                                    ...receitasArray[i],
                                    summary:data.summary
                                }

                                if(i === receitasArray.length - 1){
                                    setReceitas(receitasArray)
                                }
                            })
                    }
            })
    }, [])

    return(
        <section id="menu" className="menu">
            <div className="container">

                <div className="section-title">
                    <h2>Receitas</h2>
                    <h5>Para introduzir receitas no seu plano alimentar escolha a receita.</h5>
                    <h5>De seguida carregue no botão '+' para adicionar ao seu plano alimentar</h5>
                </div>

                {receitas.map(receitasAtributes => {
                    return(
                        //How to Convert Function to Stat to be able to use componentDidUpdate
                        //https://www.youtube.com/embed/DPdc5Z-Tf4U?autoplay=1&html5=1&enablejsapi=1&modestbranding=1&rel=0&autohide=1&iv_load_policy=3&wmode=transparent&showinfo=0&cc_load_policy=1&start=7
                        <EspacoUtilizadorReceitasItem receitasAtributes={receitasAtributes}/>
                    )
                })}
            </div>
        </section>
    )
}