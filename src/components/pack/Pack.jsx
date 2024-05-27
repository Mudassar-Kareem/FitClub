import React from "react";
import "./Pack.css";
import  {plansData}  from "../../Data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import Arrow from "../../assets/rightArrow.png"

const Pack = () =>{
    return(
        <>
         
         
         <div className="pack" id="pack">
       
            <div className="head">
            <div className="blur blur-p"></div>
         <div className="blur blur-p1"></div>
                <span className="stroke">ready to start</span>
                 <span> your journey </span>
                 <span className="stroke"> now withus</span>

                 </div>

               <div className="plans">
                  {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span> {plan.name} </span><span> $ {plan.price} </span>

                     <div className="features">
                        {plan.features.map((feature,i) =>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}> {feature}  </span>
                            </div>
                        ))}
                     </div>
                     <div><span style={{ gap:"2rem", display:"flex"}}>See more benefits  <img style={{
                        width:"0.8rem",
                        gap:"2rem",
                        
                     }} src={Arrow} alt="" /></span></div>
                     <button className="btn"  style={{ background:"white", color:"gray"}}>Jion Now</button>
                    </div>

                  ))}
                </div>     
         </div>        
        </>
    )
}
export default Pack;