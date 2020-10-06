import React, { Component } from 'react';
import logo from "../assets/alder-icon-white.png";
import Homestyle from "../pagestyles/home.css";

export default class home extends Component {




    render() {
        return (
            <div>
                <div className="demobox">
                    <img src={logo} alt="logo" />
                    <h3 className="texthead">Verification Procedure</h3>
                    <div className="sidebarButtons">
                        <a className="active" 
                        href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </div >
        )
    }
}

