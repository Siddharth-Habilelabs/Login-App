import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import './index.css';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/login' />,
        // element: <App />,
    },
    {
        path: 'login',
        element: <App />
    },
    {
        path: 'register',
        element: <App />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);