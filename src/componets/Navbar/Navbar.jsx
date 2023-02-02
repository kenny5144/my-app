import React from "react"
import "./navbar.css"
import {RiMenu3Line, RiCloseLin} from "react-icons/ri"
import logo from "../../img/logo.svg"
const Navbar =()=> {
    return(
        <div className="gpt3__navbar">

            <div className="gpt3__navbar-links" >
            
                
                <div className="gpt3__navbar-links-logo">
                    <a href="#Home"><img src={logo} alt="logo" /></a>
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT?</a></p>
                    <p><a href="#possibility">Open Ai</a></p>
                    <p><a href="#feature">Case Studies</a></p>
                    <p><a href="#blog">Libary </a></p>
                    
                        
                    

                   
                </div>
            </div>
        </div>
    )
}

export default Navbar  
