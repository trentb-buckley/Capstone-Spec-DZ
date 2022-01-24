import React from 'react';
import {useFormik} from 'formik'
import axios from 'axios';
import './components.css';
import Header from './Header'

// import { useNavigate } from "react-router-dom";

function Login(props) {
  // let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: ""
  }
  const onSubmit = (values) => {
    axios.post('http://localhost:4000/login', values)
    .then((res) => {
    // console.log('Hello World')
    localStorage.setItem('username', res.data.username)
    localStorage.setItem('id', res.data.id)
    localStorage.setItem('name', res.data.name)
    // props.logFunction()
    let login = document.getElementById('login-comp')
    login.style.display='none'
    let dashboard = document.getElementById('dashboard-comp')
    dashboard.style.display = 'unset'

    let emptyInput = document.getElementById('empty-input')
    emptyInput.value = ''
    let emptyInputPassword = document.getElementById('empty-input-password')
    emptyInputPassword.password = ''
      // navigate('/secret')
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  const validate = (values) => {
    const errors = {}
    if(!values.username) {
      errors.username = "Username Required"
    }
    if(!values.password) {
      errors.password = "Password Required"
    } else if(values.password.length < 8) {
      errors.password = "Password must be longer than 8 Characters."
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })


  return (<div id="login-comp">
    <Header />
    <h2>Login Page</h2>
    <form className='login-form' onSubmit={formik.handleSubmit}>
      <input
        id="empty-input"
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
         />
      <input
        id="empty-input-password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder='Password'
         />
         <button className="menu-btn" type='submit' disabled={!formik.isValid}>Submit</button>
    <h1>Don't have an account?</h1>
    <button className="menu-btn" className="go-to-register" onClick={()=>{
        //go to register
        let login = document.getElementById('login-comp')
        login.style.display = 'none';
        let register = document.getElementById('register-comp')
        register.style.display = 'unset'
        let dashboard = document.getElementById('dashboard-comp')
    dashboard.style.display = 'none'
    }}>Sign Up</button>
    </form>
  </div>);
}

export default Login;