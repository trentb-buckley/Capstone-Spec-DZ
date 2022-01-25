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
    // let [bag, setBag] = useState([])


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
//     const addToBag = () =>{
//         let discId = disc.id
// axios.put('http://localhost:4000/addtobag', {discId})
// }
    const myBag = ()=>{
        axios.get('http://localhost:4000/mybag')
        .then((res) => {
            setDiscs(res.data)
        })
    }
    // const getRandomDisc = () => {
    //     axios.get('http://localhost:4000/random')
    //     .then((res)=>{
    //         setBag(res.data)
    //     })
    // }
    

    const logOut = () => {
    let login = document.getElementById('login-comp')
    login.style.display='unset'
    let dashboard = document.getElementById('dashboard-comp')
    dashboard.style.display = 'none'
    let emptyInput = document.getElementById('empty-input')
    emptyInput.innerHTML = ''
    }
    
    
    
    // let bagMapped = bag.map(bag => {
    //     return(
    //         <div>
    //             <div >
    //         <div className="disc-card">
    //         <p className="brand">{bag.brand}</p>
    //         <p className="name">{bag.name}</p>
    //         <div className="flight-nums">
    //         <p className="flight-num">{bag.speed}</p>
    //         <p className="flight-num">{bag.glide}</p>
    //         <p className="flight-num">{bag.turn}</p>
    //         <p className="flight-num">{bag.fade}</p>
    //         </div>
    //         <button className="remove-from-bag-btn" onClick={removeFromBag}>Remove From Bag</button>
    //     </div>
    //     </div>

    //         </div>
    //     )
    // })
   const shineAfterEffect = () => {
    let discs = document.querySelectorAll('#shiny')
    discs.forEach((item)=>{
        item.style.transform = 'rotatez(45deg)translate(500px)'
        

    })
   }
    const shineEffect = () => {
        let discs = document.querySelectorAll('#shiny')
        discs.forEach((item)=>{
            item.style.transform = 'rotatez(45deg)translate(-500px)'
            setTimeout(shineAfterEffect, 2500)
            // shineEffect()

        })
    }
    // let clicked = false;
    
    // const toggleDiscCard = () =>{
    //     if(clicked) {
    //         let discCard = document.querySelectorAll('.disc-card')
    //         discCard.forEach((item)=>{
    //             item.style.height = '250px'
    //             item.style.width = '250px'
    //         })
    //         let discCardShadow = document.querySelectorAll('.disc-card-shadow')
    //         discCardShadow.forEach((item)=>{
    //             item.style.height = '250px'
    //             item.style.width = '250px'
    //         })
    //         let noBackground = document.querySelectorAll('.no-background')
    //         discCard.forEach((item)=>{
    //             item.style.height = '250px'
    //             item.style.width = '250px'
    //         })
            
            
    //         clicked = false
    //     }else {
    //         let discCard = document.querySelectorAll('.disc-card')
    //         discCard.forEach((item)=>{
    //             item.style.height = '200px'
    //             item.style.width = '200px'
    //         })
    //         let discCard = document.querySelector('.disc-card')
    //         discCard.style.height = '200px'
    //         discCard.style.width = '200px'
    //         let discCardShadow = document.querySelector('.disc-card-shadow')
    //         discCard.style.height = '200px'
    //         discCard.style.width = '200px'
    //         let noBackground = document.querySelector('.no-background')
    //         discCard.style.height = '200px'
    //         discCard.style.width = '200px'
    //         clicked = true
    //     }
    // }
    
    
    let discsMapped = discs.map((disc, i) => {
        let styles = {
            backgroundImage: disc.color
        }
        return (
            <div className='disc-card-shadow'>
        
            <div className='no-background' >
            <div onLoad={setTimeout(shineEffect,2500)} className="disc-card" style={styles}>
            <p className="brand">{disc.brand}</p>
            <p className="name">{disc.name}</p>
            <div className="flight-nums">
                
            <p className="flight-num">{disc.speed}</p>
            <p className="flight-num">{disc.glide}</p>
            <p className="flight-num">{disc.turn}</p>
            <p className="flight-num">{disc.fade}</p>
            </div>
            <button className="add-to-bag-btn" >Add To Bag</button>
        </div>
            <div  id="shiny" className={`shiny${i}`} ></div>
        </div>
        


        </div>)
    })
   
    // console.log(discsMapped)
  return (<div id="dashboard-comp">
      <Header className="dashboard-header" />
      
      <button id="log-out-btn" onClick={logOut}>Log Out</button>

      
      <div className='dashboard-container'>
      <button id="dashboard-buttons"  onClick={getAllDiscs}>Get All Discs</button>
      <button id="dashboard-buttons"  onClick={getAllDrivers}>Sort By Drivers</button>
      <button id="dashboard-buttons"  onClick={getAllFairways}>Sort By Fairways</button>
      <button id="dashboard-buttons"  onClick={getAllMidranges}>Sort By Midranges</button>
      <button id="dashboard-buttons"  onClick={getAllPutters}>Sort By Putters</button>
      <button id="dashboard-buttons" onClick={myBag}>My Bag</button>
      </div>
      <div className="disc-container">{discsMapped}</div>
      {/* <div className="bag-container">{bagMapped}</div> */}
      
  </div>);
}

export default Dashboard;
