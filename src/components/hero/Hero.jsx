import React from "react";
import './Hero.css';
import Header from "../header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter"



const Hero = () =>{
    
    return(
        <>
         <div className="hero" id="home">
            <div className="blur blur-h"></div>
            <div className="hero-l"><Header/>
               <div className="add">
                
                <div></div>
                <span>This is the best fitness club in the town</span>
               </div>
               <div className="text">
                <div><span className="stroke">Shape</span><span>  Your </span></div>
                <div > <span>Ideal body </span> </div>
                <div >
                    <span>
                    In here we will help you to shape and build your ideal body and live up your life to fullset
                    </span>
                </div>
               </div>
            
            <div className="figures">
                <div><span className="w"><NumberCounter end={140} start={100} delay= {4} preFix="+"/></span><span> expert Coaches</span></div>
                <div><span className="w"><NumberCounter end={970} start={890} delay= {4} preFix="+"/></span><span> Members joined</span></div>
                <div><span className="w"><NumberCounter end={60} start={0} delay= {2} preFix="+"/></span><span> Fitness programs</span></div>
            </div>
            <div className="buttons">
                <button className="btn"> Get started</button>
                <button className="btn">Learn More</button>
            </div>
            </div>
 
             <div className="hero-r">
               <button className="btn">Jion Now</button>

               <div className="heart">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span> 116 bpm</span>
               </div>
              <img src={hero_image} alt="" className="hero-img" />
              <img src={hero_image_back} alt="" className="hero-img-back" />
               
               <div className="calo">
                <img src={Calories} alt=""  />
                <div>
                <span>Calories Burned </span>
                <span> 220 kcal</span>
                </div>
               </div>
            </div> 

        </div>
        </>
    )
}
export default Hero;