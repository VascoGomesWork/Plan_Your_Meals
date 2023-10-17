import React from "react";
import Banner from "./Banner";
import Plan from "./Plans";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import SignUp from "./SignUp";

export default function SignUpPage(){
    return(
        <div>
            <Header element={"sign_up"}/>
            <SignUp />
            <Footer />
        </div>
    )
}