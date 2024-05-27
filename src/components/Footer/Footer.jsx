import React from "react";
import "./Footer.css";
import insta from "../../assets/instagram.png";
import github from "../../assets/github.png";
import link from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () =>{
    return(
        <>
         <div className="footer-container" id="footer">
            <hr />
            <div className="footer">
                <div className="social-link">
                <img src={insta} alt="" /><img src={link} alt="" /><img src={github} alt="" />
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            </div>
           <div className="blur blur-f"></div>
           <div className="blur blur-f1"></div>
         </div>
        </>
    )
}
export default Footer;