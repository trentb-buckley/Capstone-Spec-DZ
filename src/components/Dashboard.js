import React, {useState} from 'react';
// import {useFormik} from 'formik'
import axios from 'axios';
import './components.css';
import Header from './Header'
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
        axios.get('http://localhost:4000/random')
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
    let discsMapped = discs.map((disc, i) => {
        return (
            <div className='disc-card-shadow'>
        <div className='no-background'>
            <div className='no-background' >
            <div onMouseEnter={()=>{
                // console.log('mouse entered')
                // document.querySelector(`.shiny${i}`).style.transform = 'rotatez(45deg)translate(-500px)'
               let discs = document.querySelectorAll('.shiny')
               discs.forEach((item)=>{
                   item.style.transform = 'rotatez(45deg)translate(-500px)'
               })
               
                // colorOptions.forEach((item) => {
                //     colorOption.style.backgroundColor = item;
                //     optionsArray.push(colorOption);
                //   });
                // let shiny = document.querySelectorAll('#shiny')
                // shiny.forEach((item, index)=>{
                //     let clas = item;
                //     console.log(item)
                //     document.querySelector((`.shiny${index}`).toString()).style.transform = 'rotatez(45deg)translate(-500px)'
                //     // let uniqueItem = document.querySelector(`shiny${index}`)
                //     // let uniqueItem = `${item}+${index}`
                // })
                // shiny.style.transform = 'rotatez(45deg)translate(-500px)'
                
            }} onMouseLeave={()=>{
                let discs = document.querySelectorAll('.shiny')
               discs.forEach((item)=>{
                   item.style.transform = 'rotatez(45deg)translate(500px)'
               })
                // console.log('mouse left')
                // document.querySelector(`.shiny${i}`).style.transform = 'rotatez(45deg)translate(500px)'
                // let shiny = document.querySelectorAll('#shiny')
                // shiny.forEach((item, index)=>{
                //     let clas = item;
                //     console.log(item)
                //     document.querySelector((`.shiny${index}`).toString()).style.transform = 'rotatez(45deg)translate(500px)'
                //     // let uniqueItem = `${item}+${index}`
                //     // let uniqueItem = document.querySelector(`shiny${index}`)
                // })
                // shiny.style.transform = 'rotatez(45deg)translate(500px)'
            }} className="disc-card">
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
            <div id="shiny" className='shiny'></div>
        </div>
        </div>


        </div>)
    })
   
    // console.log(discsMapped)
  return (<div id="dashboard-comp">
      <Header className="dashboard-header" />
      <header className="dashboard-header">
      
      <button id="dashboard-buttons"  onClick={getAllDiscs}>Get All Discs</button>
      <button id="dashboard-buttons"  onClick={getAllDrivers}>Sort By Drivers</button>
      <button id="dashboard-buttons"  onClick={getAllFairways}>Sort By Fairways</button>
      <button id="dashboard-buttons"  onClick={getAllMidranges}>Sort By Midranges</button>
      <button id="dashboard-buttons"  onClick={getAllPutters}>Sort By Putters</button>
      <button id="log-out-btn" onClick={logOut}>Log Out</button>

      </header>
      <div className="disc-container">{discsMapped}</div>
      <div className="bag-container">{bagMapped}</div>
      
  </div>);
}

export default Dashboard;
