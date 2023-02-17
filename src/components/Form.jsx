import React from 'react'
import { useLocation } from 'react-router-dom';

import { Login } from '../components/Login'
import { Register } from '../components/Register'
import '../css/Form.css'

export const Form = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    return (
        <div className="form">
            {isLoginPage && <Login />}
            {isRegisterPage && <Register />}
        </div>
    )
}
