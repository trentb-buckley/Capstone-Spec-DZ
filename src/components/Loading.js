import React, {useState} from 'react';
// import {useFormik} from 'formik'
import axios from 'axios';
import './components.css';


function Loading() {

    let [discs, setDiscs] = useState()

    const getRandomDisc = () =>{
        axios.get('http://localhost:4000/random')
        .then((res)=>{
            let items = res.data
            
            let ranDisc = items[Math.floor(Math.random()*items.length)]
            // console.log(ranDisc)
            let itemArr = [ranDisc]
            // setDiscs(itemArr)
            let disc = itemArr[0]
            return disc
        })
    }
    let disc = getRandomDisc()
    // let discsMapped = discs.map((disc, i) => {
    //     let styles = {
    //         backgroundImage: disc.color
    //     }
    //     return (
    //     //     <div className='disc-card-shadow'>
        
    //     //     <div className='no-background' >
    //     //     <div  className="disc-card" style={styles}>
    //     //     <p className="brand">{disc.brand}</p>
    //     //     <p className="name">{disc.name}</p>
    //     //     <div className="flight-nums">
                
    //     //     <p className="flight-num">{disc.speed}</p>
    //     //     <p className="flight-num">{disc.glide}</p>
    //     //     <p className="flight-num">{disc.turn}</p>
    //     //     <p className="flight-num">{disc.fade}</p>
    //     //     </div>
    //     //     <button className="add-to-bag-btn" >Add To Bag</button>
    //     // </div>
    //     //     <div  id="shiny" className={`shiny${i}`} ></div>
    //     // </div>
        


    //     // </div>)
    // })

   
  return <div onLoad={getRandomDisc}>
      {/* <div onLoad={getRandomDisc}>{discsMapped}</div> */}
      <div className='disc-card-shadow'>
        
            <div className='no-background' >
            <div  className="disc-card" style={`backgroundImage: ${disc.color}`}>
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
            <div  id="shiny" ></div>
        </div>
        


        </div>
  </div>;
}

export default Loading;
