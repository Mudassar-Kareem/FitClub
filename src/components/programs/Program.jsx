import React from "react";
import "./Program.css";
import  {programsData}  from "../../Data/programsData";
import Arrow from "../../assets/rightArrow.png"

const Program = () =>{
    return(
        <>
          <div className="programs" id="programs">
            <div className="heading">
                <span className="stroke">explore our</span>
                 <span> programs</span>
                 <span className="stroke"> to shape you</span>
                 </div>
              <div className="programs-cat">
                {programsData.map((pro) => (
                  <div className="cat">
                    {pro.image}
                    <span>{pro.heading}</span>
                    <span>{pro.details}</span>
                    <div className="join"><span>Join Now</span><img src={Arrow} alt="" /></div>
                  </div>
                ))}
              </div>   
            
          </div>
        </>
    )
}
export default Program;