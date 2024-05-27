import React, { useState } from "react";
import "./Testi.css";
import  {testimonialsData}  from "../../Data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png"

const Testi = () =>{
    const [selected ,setSelected] = useState(0);
    const tlength = testimonialsData.length;
    return(
        <>
         <div className="testi" id="testimonials">
            <div className="testi-l">
                <span>Testimonials</span>
                <span className="stroke">  what they</span>
                <span> say about us</span>
              <span> {testimonialsData[selected].review} </span> 
              <span>
                <span style={{ color:"var(--orange)"}}> {testimonialsData[selected].name} </span>
                - {testimonialsData[selected].status}

              </span>
            </div>
            <div className="testi-r">
              <div></div>
              <div></div>
              <img src={testimonialsData[selected].image} alt="" />
              <div className="arrow">
                <img onClick={() => {
                  selected === 0
                  ?setSelected(tlength-1)
                  : setSelected((prev) => prev-1)
                }}
                
                src={leftArrow} alt="" />
                <img onClick={() => {
                  selected=== tlength -1
                  ?setSelected(0)
                  :setSelected((prev) => prev + 1)
                }} src={rightArrow} alt="" />
              </div>
            </div>
         </div>
        </>
    )
}
export default Testi;