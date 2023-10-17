import React from "react";
import Utilizador from "./Utilizador";
import {Route, useHistory, useNavigate} from "react-router-dom";


export default function Login(){

    const [formData, setForm] = React.useState({
        email:"",
        password:""
    })

    function changeFormData(event){
        console.log(formData)

        const {name, value, type} = event.target
        setForm(prevFormData => ({
                ...prevFormData,
                [name]: value
            })
        )
    }

    const navigate = useNavigate()
    function submitData(event){
        event.preventDefault()
        console.log("Data Submitted")

        console.log("UserName From Sing UP = " + Utilizador.getUtilizadorUsername())
        console.log("Email From Sing UP = " + Utilizador.getUtilizadorEmail())
        console.log("Password From Sing UP = " + Utilizador.getUtilizadorPassword())
        console.log("Spoonacular Password from Sing UP = " + Utilizador.getUtilizadorSpoonacularPassword())
        console.log("Hash from Sing UP = " + Utilizador.getUtilizadorHash())
        console.log(" ")

        if(Utilizador.getUtilizadorEmail() === formData.email){
            if(Utilizador.getUtilizadorPassword() === formData.password){
                //Redirect to Espaco Utilizador

            }
        }
        navigate('/EspacoUtilizadorPage')
    }


    return(
        <form  className="php-email-form" onSubmit={submitData}>
            <div className="text-center">
                <h1>Login</h1>
                <h4>Preencha o formulário para realizar o seu Login</h4>
            </div>
            <div className="text-center">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={changeFormData}
                        value={formData.email}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           id="password"
                           placeholder="Password"
                           onChange={changeFormData}
                           value={formData.password}
                    />
                </div>
            </div>
            <div className="text-center">
                <button id="select-tipo" className="book-a-table-btn scrollto">Login</button>
            </div>
        </form>
                )
}