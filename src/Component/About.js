import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from '../Images/AboutMeImg.png';
import '../Css/About.css';
const About=()=>{
return(
    <>
     <div className="mainSection">
      <div id="aboutUsBox" className="contentBox">
<h1 id="aboutHeading">Some Information about me.</h1>
<p id="aboutPara">I enjoy gaming, reading and spending time with family and friends. I am an avid soccer fan and enjoy following various sports. I work out regularly and would like to travel and learn and experience different and new things.I am currently working on developing an application for a NGO called Diabetes SA where we are creating an application that helps diabetics manage their insulin and sugar levels while also educating people about diabetes.</p>
     <div className="btnBox">
         <div className="btn">
             <div id="journeyBtn"></div>
             
         <NavLink to="/journey" className="readMore">My Journey
        </NavLink>

         </div>

     </div>
      </div>

</div>
<div className="imgContainer">
    < img src={aboutImage} alt="aboutpage" id="imgAbout"/>
    </div>

      
    </>
)
}
export default About;