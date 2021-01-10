import React, {useEffect} from 'react';
import styled from '../../../node_modules/styled-components';
import {color, font, sizing} from "../../utils/styled-layout";
import 'animate.css';
import WOW from 'wowjs';
import {FaPaintBrush, FaCode, FaGem, FaEdit} from 'react-icons/fa';
import HTMLReactParser from "html-react-parser";


const IconBoxWrapper = styled('div')` 
     margin-bottom: 20px;       
    & .iconbox {
     background: ${color.white};
     border-bottom: 1px solid ${color.inputBgBorderColor};
     text-align: center;
     padding: 40px 20px;
     margin: 0 0 20px;
     font-weight: 500;     
    }
    
    & .iconbox-icon {
     margin: 0 0 15px;
     font-size: 32px;
     color: ${color.headingColor};
    }
    
    & .iconbox-title {
     margin: 0 0 15px;
     padding: 0;
    }
    & .iconbox-desc p{
        color: ${color.smallTextColor};
        font-size: ${sizing.normal};
        font-weight: ${font.lightWeight}; 
    }
    
    @media(max-width: 1240px){
         & .iconbox {
            height: 100%;
         }
    }

`;

const IconBox = ({title, text, icon, animationName}) => {
    useEffect(() => {
        //init WOWjs
        if (typeof window !== 'undefined') {
            new WOW.WOW({
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: false,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                   //console.log(box)
                    //the callback is fired every time an animation is started
                    //the argument that is passed in is the DOM node being animated
                },
                //scrollContainer: scroll(".tets") // optional scroll container selector, otherwise use window
            }).init();
        }
    }, [typeof window]);

    //for choosing current Icon for Block
    const chooseCurrentIcon = (iconName) => {
        switch (iconName) {
            case "fas fa-code":
                return <FaCode/>;
            break;
            case "fas fa-paint-brush":
                return <FaPaintBrush/>;
            break;
            case "far fa-gem":
                return <FaGem/>;
            break;
            case "far fa-edit":
                return <FaEdit/>;
            break;
            default: return <FaPaintBrush/>;
        }
    }

    return(
        <IconBoxWrapper className={`col-xs-12 col-sm-6 col-md-6 col-lg-3 wow animate__animated animate__${animationName}`} data-wow-duration="1.2s">
            <div className={"iconbox"}>
                <div className="iconbox-icon">
                    {chooseCurrentIcon(icon)}
                </div>
                <div className="iconbox-text">
                    <h3 className="iconbox-title">{title}</h3>
                    <div className="iconbox-desc">
                        {HTMLReactParser(text)}
                    </div>
                </div>
            </div>
        </IconBoxWrapper>
    );
};

export default IconBox;