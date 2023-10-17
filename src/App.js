import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import EspacoUtilizadorPage from "./components/EspacoUtilizadorPage";

class App extends Component{
    render(){
      return (
          <Router>
            <div className="App">
                <Routes>
                    {/*Rotas -> https://www.codingame.com/playgrounds/6517/react-router-tutorial*/}
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/LoginPage' element={<LoginPage />} />
                    <Route exact path='/SignUpPage' element={<SignUpPage />} />
                    <Route exact path='/EspacoUtilizadorPage' element={<EspacoUtilizadorPage />} />
                </Routes>
            </div>
          </Router>
      );
    }
}

export default App;
