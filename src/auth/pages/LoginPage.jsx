import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {formState, onInputChange, username, email, password} =  useForm({
    username: '',
    email: '',
    password: ''
  })

  // const {username, email, password} = formState
  

  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin =  () => {

    login('Victor Aguilar')

    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <input 
        type="text" 
        className="form-control"
        placeholder="usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input 
        type="email" 
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      
      <input 
        type="password" 
        className="form-control"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >Login</button>
    </div>
  )
}
