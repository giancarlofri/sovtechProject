import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Home.css';
import homeImage from '../Images/HomePic.png';
const Home=()=>{
return(
    <>
  <div className="mainSection">
      <div  id="homeDivBox">
<h1 id="homeHeader">Why I would like to be a developer at Sovtech</h1>
<p id="homePara"> Sovtech provides a great opportunity for me as an developer to gain vital skills not only as a developer but as an employee.
    I feel that after this gradute program I will be a more exprienced and better developer and hopefully be in the position to 
    further my career as a software developer as well as making professional relationships in the process.
    Finally, I am eager to expreince the working culture that Sovtech provides.
</p>
     <div className="btnBox">
         <div id="readMoreBtn">
         <NavLink to="/about" className="readMore">About Me</NavLink>

         </div>

     </div>
      </div>


</div>
<div className="imgContainer">
    < img src={homeImage} alt="homepage computer" id="imgHome"/>
    </div>
    </>
)
}
export default Home;
