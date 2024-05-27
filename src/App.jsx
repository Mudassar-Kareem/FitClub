import React from "react";
import Hero from "./components/hero/Hero";
import Program from "./components/programs/Program";
import Reason from "./components/reason/Reason";
import Pack from "./components/pack/Pack";
import Testi from "./components/testi/Testi";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";


const App = () =>{
    return(
        <>
         
        <div className="App">
           
          <Hero/>
          <Program/>
          <Reason/>
          <Pack/>
          <Testi/>
          <Join/>
          <Footer/>
          </div> 
          
        </>
    )
}
export default App;