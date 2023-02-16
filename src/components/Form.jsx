import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Login } from '../components/Login'
import { Register } from '../components/Register'
import '../css/Form.css'

export const Form = () => {
    return (
        <div className="form">
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/login' />}
                    />

                    <Route
                        path='/login'
                        element={<Login />}
                    />

                    <Route
                        path='/register'
                        element={<Register />}
                    />
                </Routes>
            </Router>
        </div>
    )
}
