import React from 'react';
import styled from 'styled-components';
import {FaPhone, FaLinkedinIn, FaFacebookF, FaEnvelope} from "react-icons/fa";
import {color, sizing} from "../../utils/styled-layout";


const FooterSocialWrapper = styled('ul')`
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    
    li{
        display: inline-block;
        margin: 5px;
    }
    li > a{      
        width: 36px;
        height: 36px;
        display: block;
        line-height: 35px;
        text-align: center;
        border: 1px solid ${color.socialBtnsBorder};
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        font-size: ${sizing.normal};
        color:${color.socialBtnsColor};    
    }
`;

const FooterSocial = () => {
    return(
        <FooterSocialWrapper className={"social-links"}>
            <li>
                <a href={"tel:+9720543115835"}
                   className={"wow animate__animated animate__fadeInUp"}
                   style={{visibility: "visible", animationDelay: "0.1s"}}
                   target={"_blank"}
                >
                    <FaPhone/>
                </a>
            </li>
            <li>
                <a href={"https://ua.linkedin.com/in/andrey-shevchenko-6b0578111"}
                   className={"wow animate__animated animate__fadeInUp"}
                   style={{visibility: "visible", animationDelay: "0.1s"}}
                   target={"_blank"}
                >
                    <FaLinkedinIn/>
                </a>
            </li>
            <li>
                <a href={"https://www.facebook.com/shevadon"}
                   className={"wow animate__animated animate__fadeInUp"}
                   style={{visibility: "visible", animationDelay: "0.1s"}}
                   target={"_blank"}
                >
                    <FaFacebookF/>
                </a>
            </li>
            <li>
                <a href={"mailto:shevadon01@gmail.com"}
                   className={"wow animate__animated animate__fadeInUp"}
                   style={{visibility: "visible", animationDelay: "0.1s"}}
                   target={"_blank"}
                >
                    <FaEnvelope/>
                </a>
            </li>
        </FooterSocialWrapper>
    );
};

export default FooterSocial;