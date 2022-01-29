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
    emptyInputPassword.value = ''
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
let showText = true
  const iTextToggle = () => {
    let iText = document.querySelector('i')
    if(iText.textContent === 'Show Text') {
      iText.textContent = 'Hide Text'
      iText.style.backgroundColor = 'black'
      iText.style.color = 'red'
    } else {
      iText.textContent = 'Show Text'
      iText.style.backgroundColor = 'red'
      iText.style.color = 'black'

    }
  }
  // const checkChange = () => {
  //   let input = document.querySelector('#empty-input-password')
  //   if(input.value){
  //     document.querySelector('i').style.display = 'unset'
  //   } else {
  //     document.querySelector('i').style.display = 'none'
  //   }
  // }
  // checkChange()
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
        onKeyUp={(event)=>{
          if (event.key === 13) {
            console.log(event.key)
            onSubmit()
        }
        }}
        value={formik.values.password}
        placeholder='Password'
         />
         <i className="bi bi-eye-slash" id="toggle-password" onClick={(e)=>{
      // toggle the type attribute
      iTextToggle()
      const password = document.querySelector("#empty-input-password");
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      
      // toggle the icon
      // e.classList.toggle("bi-eye");
  }}>Show Text</i>
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