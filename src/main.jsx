import React from 'react'
import ReactDOM from 'react-dom/client'
import MRouter from './router'
import { BrowserRouter , Route, Link } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < BrowserRouter >
    <MRouter />
    </BrowserRouter>
   
  </React.StrictMode>,
)
