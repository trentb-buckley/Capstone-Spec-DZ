import React, {useState} from 'react';
// import {useFormik} from 'formik'
import axios from 'axios';
import './components.css';
// const sequelize = require('../server/index')

function Dashboard() {

    // const initialValues = {
    //     id: ""
    
    //   }
    
    let [discs, setDiscs] = useState([])
    let [bag, setBag] = useState([])

    const getAllDiscs = ()=>{
        axios.get('http://localhost:4000/discs')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllDrivers = ()=>{
        axios.get('http://localhost:4000/drivers')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllFairways = ()=>{
        axios.get('http://localhost:4000/fairways')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllMidranges = ()=>{
        axios.get('http://localhost:4000/midranges')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllPutters = ()=>{
        axios.get('http://localhost:4000/putters')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getRandomDisc = () => {
        axios.get('http://localhost:4000/putters')
        .then((res)=>{
            setBag(res.data)
        })
    }
    

    const logOut = () => {
    let login = document.getElementById('login-comp')
    login.style.display='unset'
    let dashboard = document.getElementById('dashboard-comp')
    dashboard.style.display = 'none'
    let emptyInput = document.getElementById('empty-input')
    emptyInput.innerHTML = ''
    }
    const addToBag = () => {
        // axios.post('http://localhost:4000/addtobag')
        // .then((res)=>{
        //     console.log(res.data)
        //     localStorage.setItem('id', res.data[0][0].id)
        // })
        // .catch((err) => console.log(err.response.data))
    }
    const removeFromBag = () => {

    }
    
    let bagMapped = bag.map(bag => {
        return(
            <div>
                <div >
            <div className="disc-card">
            <p className="brand">{bag.brand}</p>
            <p className="name">{bag.name}</p>
            <div className="flight-nums">
            <p className="flight-num">{bag.speed}</p>
            <p className="flight-num">{bag.glide}</p>
            <p className="flight-num">{bag.turn}</p>
            <p className="flight-num">{bag.fade}</p>
            </div>
            <button className="remove-from-bag-btn" onClick={removeFromBag}>Remove From Bag</button>
        </div>
        </div>

            </div>
        )
    })
    let discsMapped = discs.map(disc => {
        return (
        <div >
            <div >
            <div className="disc-card">
            <p className="brand">{disc.brand}</p>
            <p className="name">{disc.name}</p>
            <div className="flight-nums">
            <p className="flight-num">{disc.speed}</p>
            <p className="flight-num">{disc.glide}</p>
            <p className="flight-num">{disc.turn}</p>
            <p className="flight-num">{disc.fade}</p>
            </div>
            <button className="add-to-bag-btn" onClick={addToBag}>Add To Bag</button>
        </div>
        </div>


        </div>)
    })
   
    // console.log(discsMapped)
  return (<div id="dashboard-comp">
      <header className="dashboard-header">
      
      <button className="dashboard-buttons get-all-discs"  onClick={getAllDiscs}>Get All Discs</button>
      <button className="dashboard-buttons get-all-drivers"  onClick={getAllDrivers}>Sort By Drivers</button>
      <button className="dashboard-buttons get-all-fairways"  onClick={getAllFairways}>Sort By Fairways</button>
      <button className="dashboard-buttons get-all-midranges"  onClick={getAllMidranges}>Sort By Midranges</button>
      <button className="dashboard-buttons get-all-putters"  onClick={getAllPutters}>Sort By Putters</button>
      <button className="log-out-btn" onClick={logOut}>Log Out</button>

      </header>
      <div className="disc-container">{discsMapped}</div>
      <div className="bag-container">{bagMapped}</div>
      
  </div>);
}

export default Dashboard;
