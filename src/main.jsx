import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { EmployeesApp } from './EmployeesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <EmployeesApp />
    </BrowserRouter>
  // </React.StrictMode>
)
