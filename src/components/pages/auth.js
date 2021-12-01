import React, { Component } from 'react';
import Login from '../auth/login';
import LoginImg from "../../assets/images/auth/login.jpg"


export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" 
                    style={{backgroundImage: `url(${LoginImg})`
                    }}
                />

                <div className="right-column">
                    <Login />
                </div>
            </div>
        )
    }
}