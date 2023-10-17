import React from "react";
import {Link, Navigate} from "react-router-dom";
import LoginPage from "./LoginPage";
import Utilizador from "./Utilizador";
import Alert from "./Alert";
import {createRoot, render} from "react-dom/client";

export default function SignUp(){

    const [formData, setForm] = React.useState({
        name:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        repeatPassword:""
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

    function submitData(event){
        event.preventDefault()

        if(formData.password === formData.repeatPassword){
            // Send data to the API via POST
            fetch('https://api.spoonacular.com/users/connect?apiKey=2c7f4036297b414cb84a5fc55432e437', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "username":formData.userName,
                    "firstName":formData.firstName,
                    "lastName":formData.lastName,
                    "email":formData.email
                }) // body data type must match "Content-Type" header
            }).then((response) => {
                return response.json();
            }).then((parsedData) => {
                console.log("User Data Status = " + parsedData.status)
                console.log("User Data Username = " + parsedData.username)
                console.log("User Data spoonacularPassword= " + parsedData.spoonacularPassword)
                console.log("User Data hash= " + parsedData.hash)
                //Push Data Inside Array
                Utilizador.setUtilizadorData(parsedData.username, formData.email, formData.password, parsedData.spoonacularPassword, parsedData.hash)
            })
        }
    }

    const [notificacao, setNotificacao] = React.useState(false)
    function renderComponent(){
        setNotificacao(prevState => !prevState)
    }

    return(
        <form  className="php-email-form" onSubmit={submitData}>
            <div className="text-center">
                <h1>Sign Up</h1>
                <h4>Preencha os campos do formulário para se registar</h4>
            </div>
            <div className="text-center">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={changeFormData}
                        value={formData.name}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input type="lastName"
                           className="form-control"
                           name="lastName"
                           id="lastName"
                           placeholder="Last Name"
                           onChange={changeFormData}
                           value={formData.lastname}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>User Name</label>
                    <input type="userName"
                           className="form-control"
                           name="userName"
                           id="userName"
                           placeholder="User Name"
                           onChange={changeFormData}
                           value={formData.username}
                    />
                </div>

                <div className="form-group mt-3">
                    <label>Email</label>
                    <input type="email"
                           className="form-control"
                           name="email"
                           id="email"
                           placeholder="Email"
                           data-rule="minlen:4"
                           data-msg="Please enter at least 4 chars"
                           onChange={changeFormData}
                           value={formData.email}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           data-rule="minlen:4"
                           data-msg="Please enter at least 4 chars"
                           onChange={changeFormData}
                           value={formData.password}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Repeat Password</label>
                    <input type="password"
                           className="form-control"
                           name="repeatPassword"
                           id="repeatPassword"
                           placeholder="Repeat Password"
                           data-msg="Please enter at least 4 chars"
                           onChange={changeFormData}
                           value={formData.repeatPassword}
                    />
                </div>
            </div>
            <div className="text-center">
                <button id="select-tipo" className="book-a-table-btn scrollto" onClick={renderComponent}>Sign Up</button>
                {notificacao && <Alert id="alert" props={"Utilizador Registado com Sucesso"}/>}
            </div>
        </form>
    )
}