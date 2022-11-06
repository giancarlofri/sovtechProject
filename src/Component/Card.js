import React from 'react';


const Card=(props)=>{
    return(
        <>
       <div className="card">
                <h2>{props.title1}</h2>
                <img src={props.imgSource} alt="journey1" className="journeyImg"/>
                <p>{props.descl}</p>
                
    
    
  
           
            </div>
        </>
    )
}
export default Card;
