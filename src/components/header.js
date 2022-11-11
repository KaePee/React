import React from "react";
import ProfileImg from "./images/profile-pic.jpg";
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"


function Header() {
    return (
        <div>
            <div>
                <img src={ProfileImg} alt="profile-pic" className="center--cropped" />
            </div>
            <p className="header--text"><h1>Somuah Kwasi Obed</h1>
                <h3>Frontend Developer</h3>
                <h4>x-azdev.com</h4>
            </p>
            <div id="btns">

                <button className="btn1">
                    <MdEmail style={{ fontSize: "2rem", marginRight: "10px" }} />Email</button>

                <button className="btn2">
                    <span><FaLinkedin /></span>LinkedIn</button>
            </div>


        </div>
    )
}

export default Header;