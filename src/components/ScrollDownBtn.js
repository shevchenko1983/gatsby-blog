import React from 'react';
import {FaAngleDown} from "react-icons/fa";
import {color, sizing} from "../utils/styled-layout";
import styled from '../../node_modules/styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollDownBtnWrapper = styled('span')`
    .scroll-down {
     position: absolute;
     left: 50%;
     bottom: 40px;
     border: 2px solid ${color.white};
     border-radius: 50%;
     height: 50px;
     width: 50px;
     margin-left: -15px;
     display: block;
     z-index: 10;
     text-align: center;
     cursor:pointer;
     
      & span{
        position: relative;
        color: ${color.white};
        -webkit-animation-name: drop;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-delay: 0s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-play-state: running;
        animation-name: drop;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-play-state: running;
        
        & svg{
            font-size: ${sizing.big};
        }
    }
 }

    @-webkit-keyframes drop{
        0%   { top:0px;  opacity: 0;}
        30%  { top:10px; opacity: 1;}
        100% { top:25px; opacity: 0;}
    }

    @keyframes drop{
        0%   { top:0px;  opacity: 0;}
        30%  { top:10px; opacity: 1;}
        100% { top:25px; opacity: 0;}
    }
    
    @media(max-width:767px){   
        .scroll-down{
            left: 0;
            right: 0;
            display: inline-block;
            margin: auto;
        }
    }
`;

const ScrollDownBtn = () => {
    return(
            <ScrollDownBtnWrapper  className={'scroll-down__btn'}>
                <Link  activeClass="active"
                       to="portfolio"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={1000}>
                            <div className="scroll-down">
                                    <span>
                                        <FaAngleDown/>
                                    </span>
                            </div>
                </Link>
            </ScrollDownBtnWrapper>
    );
};

export default  ScrollDownBtn;