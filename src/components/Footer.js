import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";
 
const Footer = () => {
    return (
        <footer>
            <SocialIcon style={{ height: 40, width: 40 }} url="https://github.com/FromTellus" />
            <SocialIcon style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/ulf-bj%C3%B6rkman-670357149/" />
        </footer>
    );
}

export default Footer;