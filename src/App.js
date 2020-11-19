import React, { useEffect, useState,useRef} from 'react';
import './Scss/reset.scss';
import './Scss/App.scss';
import {scrollCrystal,glitchWriter, getRequest} from './Utility/utility.js';
import logo from './Assets/ffxiv_req_logo.png';
import Youtube from './Components/backgroundVideo.js';
import Crystal from './Components/crystal.js';




 function App (){
    const [login, setLogin] = useState()
    const [requests, setRequests] = useState()
    const glitch = useRef()
    const crystal_01 = useRef()
    const crystal_02 = useRef()
    const crystal_03 = useRef()




    useEffect(() => {
      glitchWriter(glitch.current)
      scrollCrystal(crystal_01,crystal_02,crystal_03)
      getRequest(setRequests)
    },[])

  return (
    <div className="container">
      <div className="wrapper fade_in_left">
        <img src={logo} className="" alt='FFXIV REQUISITION logo'/>
        <h1 ref={glitch} className="glitch" alt='subtitle'> </h1> 
        <a href='localhost:5000/api/auth/' className='btn'>{login?'Log out':'Log in'}</a>
      </div>

      <Crystal crystals={[crystal_01,crystal_02,crystal_03]}/>

      <div className="leftShape"/>
      {login? <div className="rightShape"/> : null}
      

      <Youtube />
    </div>
  );
}



export default App;
