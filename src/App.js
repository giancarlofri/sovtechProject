import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Journey from './Component/Journey';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';
const App=()=>{
  return(
    <>
    <List/>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/journey' element={<Journey/>}/>
<Route  element={<Error/>}/>

</Routes>
<Footer></Footer>
    </>
  )
}
export default App;
