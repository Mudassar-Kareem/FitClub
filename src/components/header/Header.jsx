import React, { useState } from "react";
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () =>{
    const mobile = window.innerWidth <= 768 ? true : false;
    const [manuOpened, setmanuOpened] =  useState(false);


    return(
        <>
         <div className="header" > 
            <img src={Logo}  alt="" className="logo"/>  
             {manuOpened === false && mobile === true ? (
                <div
                   style={{
                    background:"gray",
                    padding:"0.5rem",
                    borderRadius:"5px",
                   }}

                   onClick={() => setmanuOpened(true)}
                >
                    <img src={Bars} alt="" style={{width:"1.5rem" , height:"1.5rem"}}/>
                </div> 
                ):(
                    <ul className="header-manu">
                    <li >
                        <Link
                         activeClass="active"
                         to="home"
                         spy={true}
                         smooth={true}
                         onClick={() => setmanuOpened(false)}
                        
                        >Home</Link>
                    </li>
                    <li>
                    <Link 
                         to="programs"
                         spy={true}
                         smooth={true}
                         onClick={() => setmanuOpened(false)}
                        > Programs</Link>
                       </li>
                    <li >
                    <Link 
                         to="reason"
                         spy={true}
                         smooth={true}
                         onClick={() => setmanuOpened(false)}
                        > Why us</Link>
                        
                        </li>
                    <li >
                    <Link
                     to='pack'
                     spy={true}
                     smooth={true}
                     onClick={() => setmanuOpened(false)}
                    >Plans</Link></li>
                    <li><Link
                     to='testimonials'
                     spy={true}
                     smooth={true}
                     onClick={() => setmanuOpened(false)}
                    >Testimonials</Link></li>
                </ul>
                )}
         </div>
        </>
    )
}
export default Header;