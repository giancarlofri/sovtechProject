import React from "react";
import { NavLink } from "react-router-dom";
import homepage from '../Images/sovtech.png';
import '../Css/ListStyle.css';

const List=()=>{
return(
    <>
    <header>
        <div className="container container-flex">
<div className="logocontainer">
    <img src={homepage} alt="homepage Logo" className="homepage"/>
    </div>
    <nav>
        <div className="list">
<NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
<NavLink to="/about" className="listItem" activeClassName="activeItem">About Me</NavLink>
<NavLink to="/journey" className="listItem" activeClassName="activeItem">My Journey</NavLink>
        </div>
    </nav>
        </div>
    </header>
    </>
)
}
export default List;