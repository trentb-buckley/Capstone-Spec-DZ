import React, {useState} from 'react';
import axios from 'axios';
import './components.css';
import Header from './Header'


function Dashboard() {

    let [discs, setDiscs] = useState([])
    
    const clickOff = () =>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
    }
    const getAllDiscs = ()=>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/discs')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllDrivers = ()=>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/drivers')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllFairways = ()=>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/fairways')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllMidranges = ()=>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/midranges')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getAllPutters = ()=>{
        document.querySelector('.all-drop-down-container').style.display = 'none'
        document.querySelector('.all-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/putters')
        .then((res)=>{
            setDiscs(res.data)
        })


    }
    const getRandomDisc = () =>{
        axios.get('http://localhost:4000/random')
        .then((res)=>{
            let items = res.data
            
            let ranDisc = items[Math.floor(Math.random()*items.length)]
            console.log(ranDisc)
            let itemArr = [ranDisc]
            setDiscs(itemArr)
        })
    }
    const getRandomPack = () =>{
        axios.get('http://localhost:4000/pack') 
        .then((res)=>{
            // let resData = res.data
            // console.log(resData)
            setDiscs(res.data)
        })
    }
    const clearDiscs = () =>{
        setDiscs([])
    }
    const addToBag = (discId) =>{
    
axios.put('http://localhost:4000/addtobag', {discId})
        .then((res)=>{

            // myBag()

        })
}
    const myBag = ()=>{
        axios.get('http://localhost:4000/mybag')
        .then((res) => {
            setDiscs(res.data)

        })
    }
    //Innova drop down
    const getAllInnovaDiscs = () => {
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-innova-discs')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllInnovaDrivers = () => {
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-innova-drivers')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllInnovaFairways = () => {
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-innova-fairways')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllInnovaMidranges = () => {
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-innova-midranges')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllInnovaPutters = () => {
        document.querySelector('.innova-drop-down-container').style.display = 'none'
        document.querySelector('.innova-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-innova-putters')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    //Discraft drop down
    const getAllDiscraftDiscs = () => {
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discraft-discs')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscraftDrivers = () => {
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discraft-drivers')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscraftFairways = () => {
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discraft-fairways')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscraftMidranges = () => {
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discraft-midranges')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscraftPutters = () => {
        document.querySelector('.discraft-drop-down-container').style.display = 'none'
        document.querySelector('.discraft-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discraft-putters')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    //Discmania drop down
    const getAllDiscmaniaDiscs = () => {
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discmania-discs')
            .then((res)=>{
                setDiscs(res.data)
                console.log(res.data)
            })
    }
    const getAllDiscmaniaDrivers = () => {
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discmania-drivers')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscmaniaFairways = () => {
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discmania-fairways')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscmaniaMidranges = () => {
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discmania-midranges')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllDiscmaniaPutters = () => {
        document.querySelector('.discmania-drop-down-container').style.display = 'none'
        document.querySelector('.discmania-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-discmania-putters')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    //Westside drop down
    const getAllWestsideDiscs = () => {
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-westside-discs')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllWestsideDrivers = () => {
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-westside-drivers')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllWestsideFairways = () => {
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-westside-fairways')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllWestsideMidranges = () => {
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-westside-midranges')
            .then((res)=>{
                setDiscs(res.data)
            })
    }
    const getAllWestsidePutters = () => {
        document.querySelector('.westside-drop-down-container').style.display = 'none'
        document.querySelector('.westside-drop-down').style.display = 'unset'
        axios.get('http://localhost:4000/get-all-westside-putters')
            .then((res)=>{
                setDiscs(res.data)
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
    
    
    
   
   const shineAfterEffect = () => {
    let discs = document.querySelectorAll('#shiny')
    discs.forEach((item)=>{
        item.style.transform = 'rotatez(45deg)translate(500px)'
        

    })
    return
   }
    const shineEffect = () => {
        let discs = document.querySelectorAll('#shiny')
        discs.forEach((item)=>{
            item.style.transform = 'rotatez(45deg)translate(-500px)'
            setTimeout(shineAfterEffect, 2500)
            // shineEffect()

        })
        return
    }
    // let clicked = false;
    // document.querySelector('#dashboard-comp').addEventListener('click', clickOff())
   
    
    let discsMapped = discs.map((disc, i) => {
        
        // console.log(disc.mybag)
        let addToBagTxt = ''
        if(disc.mybag === true){
            
            addToBagTxt = 'Remove From Bag'
        } else {
            addToBagTxt = 'Add To Bag'
        }
        let styles = {
            backgroundImage: disc.color
        }

        return (
            <div className='disc-card-shadow'>
        
            <div className='no-background' >
            <div onLoad={setTimeout(shineEffect, 2500)} className="disc-card" style={styles}>
            <p className="brand">{disc.brand}</p>
            <p className="name">{disc.name}</p>
            <div className="flight-nums">
                
            <p className="flight-num">{disc.speed}</p>
            <p className="flight-num">{disc.glide}</p>
            <p className="flight-num">{disc.turn}</p>
            <p className="flight-num">{disc.fade}</p>

            </div>
            <button onClick={()=>{
                
                addToBag(disc.id)
                clickOff()
            }} className="add-to-bag-btn"  >{addToBagTxt}</button>
        </div>
            <div  id="shiny" className={`shiny${i}`} ></div>
        </div>
        


        </div>)
    })



    
  return (<div  id="dashboard-comp">
      <Header className="dashboard-header" />
      
      <button id="log-out-btn" onClick={logOut}>Log Out</button>

      
    <div className='dashboard-container'>

        <div className='disc-buttons-container'>
        <button className="disc-buttons" id="brand-specific-dashboard-buttons" onClick={()=>{
            clickOff()
            document.querySelector('.innova-drop-down-container').style.display = 'flex'
            // document.querySelector('.innova-drop-down').style.display = 'none'
        }} className='innova-drop-down'>Innova</button>
        <button className="disc-buttons" id="brand-specific-dashboard-buttons" onClick={()=>{
                clickOff()
            document.querySelector('.discraft-drop-down-container').style.display = 'flex'
            // document.querySelector('.discraft-drop-down').style.display = 'none'
        }} className='discraft-drop-down'>Discraft</button>
        <button className="disc-buttons" id="brand-specific-dashboard-buttons" onClick={()=>{
                clickOff()
            document.querySelector('.discmania-drop-down-container').style.display = 'flex'
            // document.querySelector('.discmania-drop-down').style.display = 'none'
        }} className='discmania-drop-down'>Discmania</button>
        <button className="disc-buttons" id="brand-specific-dashboard-buttons" onClick={()=>{
                clickOff()
            document.querySelector('.westside-drop-down-container').style.display = 'flex'
            // document.querySelector('.westside-drop-down').style.display = 'none'
        }} className='westside-drop-down'>Westside</button>
        <button className="disc-buttons" id="brand-specific-dashboard-buttons" onClick={()=>{
                clickOff()
            document.querySelector('.all-drop-down-container').style.display = 'flex'
            // document.querySelector('.all-drop-down').style.display = 'none'
        }} className='all-drop-down'>All Discs</button>
        <button className="disc-buttons" id="dashboard-buttons" onClick={()=>{
            myBag()
            clickOff()
        }}>My Bag</button>
        
        <button className="disc-buttons random-pack" id="dashboard-buttons" onClick={()=>{
            getRandomPack()
            clickOff()
        }}>Get Random<br/> Players Pack</button>
        <button className="disc-buttons" id="dashboard-buttons" onClick={()=>{
            getRandomDisc()
            clickOff()
        }}>Get Random Disc</button>
        <button className="disc-buttons" id="dashboard-buttons" onClick={()=>{
            clearDiscs()
            clickOff()
        }}>Clear Discs</button>


        </div>

        
        <div className='disc-drop-down-container'>
        <div className='innova-drop-down-container'>
        <button id="brand-specific-buttons"  onClick={getAllInnovaDiscs}>All Innova Discs</button>
        <button id="brand-specific-buttons"  onClick={getAllInnovaDrivers}>Innova Drivers</button>
        <button id="brand-specific-buttons"  onClick={getAllInnovaFairways}>Innova Fairways</button>
        <button id="brand-specific-buttons"  onClick={getAllInnovaMidranges}>Innova Midranges</button>
        <button id="brand-specific-buttons"  onClick={getAllInnovaPutters}>Innova Putters</button>
        </div>
        <div className='discraft-drop-down-container'>
        <button id="brand-specific-buttons"  onClick={getAllDiscraftDiscs}>All Discraft Discs</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscraftDrivers}>Discraft Drivers</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscraftFairways}>Discraft Fairways</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscraftMidranges}>Discraft Midranges</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscraftPutters}>Discraft Putters</button>
        </div>
        <div className='discmania-drop-down-container'>
        <button id="brand-specific-buttons"  onClick={getAllDiscmaniaDiscs}>All Discmania Discs</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscmaniaDrivers}>Discmania Drivers</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscmaniaFairways}>Discmania Fairways</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscmaniaMidranges}>Discmania Midranges</button>
        <button id="brand-specific-buttons"  onClick={getAllDiscmaniaPutters}>Discmania Putters</button>
        </div>
        <div className='westside-drop-down-container'>
        <button id="brand-specific-buttons"  onClick={getAllWestsideDiscs}>All Westside Discs</button>
        <button id="brand-specific-buttons"  onClick={getAllWestsideDrivers}>Westside Drivers</button>
        <button id="brand-specific-buttons"  onClick={getAllWestsideFairways}>Westside Fairways</button>
        <button id="brand-specific-buttons"  onClick={getAllWestsideMidranges}>Westside Midranges</button>
        <button id="brand-specific-buttons"  onClick={getAllWestsidePutters}>Westside Putters</button>
        </div>
        <div className='all-drop-down-container'>
        <button id="brand-specific-buttons"  onClick={getAllDiscs}>All Discs</button>
        <button id="brand-specific-buttons"  onClick={getAllDrivers}>All Drivers</button>
        <button id="brand-specific-buttons"  onClick={getAllFairways}>All Fairways</button>
        <button id="brand-specific-buttons"  onClick={getAllMidranges}>All Midranges</button>
        <button id="brand-specific-buttons"  onClick={getAllPutters}>All Putters</button>
        
        </div>
        </div>
         
      </div>

      
      
      <div className="disc-container">{discsMapped}</div>
      <div className='info'>
            {/* <h2 className='info-header'>References</h2> */}
            
      </div>
      <footer></footer>
  </div>);
}

export default Dashboard;
