import React from 'react'
import MyImage from './leslie-knope.png';
import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Card () {
  return (
    <>
      <img src={MyImage} className="card-image" alt="leslie" />      

      <div className="card-text">
        <h1>Leslie Knope</h1>
        <h3>Deputy Director of Parks and Recreation</h3>
        <p><a href="#" title="pawnee-website">www.pawneeparks-and-rec.io</a></p>
      </div>  

      <div className="button-container">
        <button className="button-left">Email</button>
          {/* <img src={EmailIcon}/>Email</button> */}
        
        <button className="button-right">LinkedIn</button>
          {/* <img src={LinkedInIcon}/> LinkedIn</button> */}
      </div>

    </>
  )
}
