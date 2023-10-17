import React from "react";
import Plan_Item from "./Plan_Item";
import {Link} from "react-router-dom";

export default function Plan(){
    return(
        <section id="planos_alimentares" className="why-us">
            <div className="container">
                <div className="section-title">
                    <h2>Planos <span>Alimentares</span></h2>
                    <h4>Aqui podemos verificar alguns planos alimentares já criados.</h4>
                </div>
                <div className="row">
                    <Plan_Item />
                </div>
                <p></p>
                <p>Para criar Planos Alimentares seus registe-se utilizando o<a href={'./SignUpPage'} className="book-a-table-btn scrollto">Sign Up</a></p>
                <p>Caso já tenha uma conta realize o seu<a href={'./LoginPage'} className="book-a-table-btn scrollto">Login</a> Crie e Visualize o seu plano alimentar no<a href={'./EspacoUtilizadorPage'} className="book-a-table-btn scrollto">Espaço do Utilizador</a></p>
            </div>
        </section>
    )
}