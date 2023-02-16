import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
    return (
        <div className="App">
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
    );
}

export default App;
