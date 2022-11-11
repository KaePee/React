import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <div>
            <ul className="icons--list">
                <li><FaTwitter /></li>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaGithub /></li>
            </ul>
        </div>
    )
}

export default Footer;