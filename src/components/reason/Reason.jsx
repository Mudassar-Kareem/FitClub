import React from "react";
import "./Reason.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () =>{
    return(
        <>
           <div className="reason" id="reason">
              <div className="left">
                <img src={img1} alt="" class />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
            <div className="right">
              <span> Some reason</span>

              <div>
                <span className="stroke">why</span>
                <span> choose us?</span>
              </div>

              <div className="details-r">
                <div> <img src={tick} alt="" /><span>over 140+ expert coachs</span></div>
                <div><img src={tick} alt="" /><span>train smarter and faster than before</span></div>
                <div><img src={tick} alt="" /><span>1 free program for new member</span></div>
                <div><img src={tick} alt="" /><span>reliable partners</span></div>
                

              </div>
              
              
                <span style={{
                  color:" var(--gray)",
                  fontWeight:"normal",
                }}>our partners</span>

                <div className="p">
                  <img src={nb} alt="" />
                  <img src={nike} alt="" />
                  <img src={adidas} alt="" />
                </div>

                
              
            </div>

           </div> 
            
                
                
              
          
        </>
    )
}
export default Reason;
