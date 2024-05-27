import React, { useRef } from "react";
import "./Join.css";

const Join = () =>{
    const form =useRef();
    
    return(
        <>
         <div className="join" id="join">
            <div className="j-left">
                <hr />
                <div>
                    <span className="stroke">ready to</span>
                    <span> level up</span>
                </div>
                <div>
                    <span > your body</span>
                    <span className="stroke"> with us</span>
                </div>
            </div>
            <div className="j-right">
                <form useRef={form} className="email">
                    <input type="email" name="user_email"  placeholder="Enter Your Email Adress"/>
                    <button className="btn ">Jion now</button>
                </form>
            </div>
            
            
         </div>
        </>
    )
}
export default Join;