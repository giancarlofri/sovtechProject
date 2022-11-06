import React from 'react';
import '../Css/JourneyStyle.css';
import Card from './Card';
import Data from './Data';
const Journey=()=>{
    return(
        <>
        <h1>My Eductional Journey</h1>
        <div className="journeys">
{Data.map((values)=>{
    return(<Card title1={values.Stitle}
        imgSource={values.imgsrc}
        descl={values.descl}
        btnService={values.btnService}
        />
    )
})}
            </div>
 </>
    )}
export default Journey;
