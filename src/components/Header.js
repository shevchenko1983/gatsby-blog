import React from 'react';
import {color, font, sizing} from "../utils/styled-layout";
import styled from '../../node_modules/styled-components';
//import HeaderBgImage from '../../src/images/headerImages/cover.jpg';
import ScrollDownBtn from "./ScrollDownBtn";

const HeaderWrapper = styled('section')`
    
    &#home {
     background: url();/*HeaderBgImage*/
     background-color: ${color.headingColor};
     background-attachment: fixed;
     background-repeat: no-repeat;
     background-position: 50% 50%;
     -webkit-background-size: cover;
      -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
     padding: 0;
     height: 100vh;
    }
    
    .name{
        text-shadow: ${color.shadowText};
    }
    
    & .home-overlay {
        background-color: ${color.headerOverlay};
        // background-image: url("./includes/images/pattern.png");
        background-repeat: repeat;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 0;
    }

    .intro {
     position: absolute;
     width: 100%;
     top: 50%;
     left: 0;
     text-align: center;
     -webkit-transform: translate(0%, -50%);
       -moz-transform: translate(0%, -50%);
     -ms-transform: translate(0%, -50%);
     -o-transform: translate(0%, -50%);
     transform: translate(0%, -50%);
     padding: 0 15px;
        
        & h1{
            font-weight: 800;
        }     
    }

    .start {
     font-family: ${font.fontFamily}
     font-size: ${sizing.default};     
     text-transform: none;
     margin: 15px 0;   
    }  
    
    @media (max-width: 480px){
        .intro h2 {
            font-size: ${sizing.bigHeading};
            margin: 0 0 30px;
            letter-spacing: 3px;
        }
        .intro h1 {
            font-size: 34px;
            letter-spacing: 3px;
        }
    }    
`;


const Header = () => {
    return(
        <HeaderWrapper id="home" className="pfblock-image screen-height">
            <div className="home-overlay"></div>
            <div className="intro">
                <div className="start">Hello, my name is</div>
                <h2 className="name">Andrey Shevchenko</h2>
                <div className="start">and I am</div>
                <h1>Web Developer</h1>
                <div className="start">creating modern and responsive Web Application</div>
                <div id="root"></div>
            </div>
            <ScrollDownBtn/>
        </HeaderWrapper>
    );
};

export default  Header;