import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store }  from './store'


import App from './App'

import './global.css'
// import { Login } from './screens/Login'

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode> 
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

