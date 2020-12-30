import React from 'react';
import styled from '../../../node_modules/styled-components';
import Img from 'gatsby-image';
import {color, sizing} from "../../utils/styled-layout";
import HTMLReactParser from "html-react-parser";

const FigureItemWrapper = styled('figure')`
      position: relative;
      float: left;
      overflow: inherit;
      margin: 10px 1%;
      min-width: 100%;
      max-width: 100%;
      height: auto;
      background: ${color.workItemBgBubba};
      text-align: center;
      cursor: pointer;
      
      & p{
        font-size: ${sizing.text};
      }
      
      & img{
        position: relative;
        display: block;
        min-height: auto;
        width: 100%;
        height: 100%;
        opacity: 0.8;
      }
      
      & figcaption {
        padding: 2em;
        color: ${color.white};
        text-transform: uppercase;
        font-size: 1.25em;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
        &::before,
        &::after{
            pointer-events: none;
        }
        
        & > a{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            text-indent: 200%;
            white-space: nowrap;
            font-size: 0;
            opacity: 0;
        }
      }
      
      /*---------------*/
    /***** Bubba *****/
    /*---------------*/
    
    &.effect-bubba {
      background: ${color.bubbaBg}; 
      position: relative;
      max-height: 445px; 
      
       & .gatsby-image-wrapper{
        width: 100%!important;
        position: static!important;
      }    
      
      &:hover img{
        opacity: .2!important;  
      }
      
      & img{
        opacity: 1;
        -webkit-transition: opacity 0.35s;
        transition: opacity 0.35s;     
      }
      
      & h2{
        padding-top: 10%;
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        color: ${color.white};
        opacity: 0;
      }
      
      & p{
        padding: 7px 2.5em !important;
        padding-left: 0;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(0,20px,0);
        transform: translate3d(0,20px,0);
      }
      &:before,
      &:after{
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 50%;
        top: 80%;
        max-width: 300px;
        background: #777;
        -webkit-box-shadow: 0 15px 10px #777;
        -moz-box-shadow: 0 15px 10px #777;
        box-shadow: 0 15px 10px #777;
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
        -o-transform: rotate(-3deg);
        -ms-transform: rotate(-3deg);
        transform: rotate(-3deg);
      }
      &:after{
        -webkit-transform: rotate(3deg);
        -moz-transform: rotate(3deg);
        -o-transform: rotate(3deg);
        -ms-transform: rotate(3deg);
        transform: rotate(3deg);
        right: 10px;
        left: auto;
      }
      &:hover h2,
      &:hover p{
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }
      
      &:hover figcaption::before,
      &:hover figcaption::after{
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      
      & figcaption::before,
      & figcaption::after{
        position: absolute;
        top: 30px;
        right: 30px;
        bottom: 30px;
        left: 30px;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
      }
      & figcaption::before{
        border-top: 1px solid ${color.white};
        border-bottom: 1px solid ${color.white};
        -webkit-transform: scale(0,1);
        transform: scale(0,1);
      }
      & figcaption::after{
        border-right: 1px solid ${color.white};
        border-left: 1px solid ${color.white};
        -webkit-transform: scale(0,1);
        transform: scale(0,1);
      } 
     
    }
    
    @media(max-width:500px){
      figure.effect-bubba{
        max-height: inherit;
      }   
    }
`;

const FigureItem = ({title, image, description}) => {
    return(
        <FigureItemWrapper className="effect-bubba">
                <Img fixed={image}
                     alt="Lotus<br>WUPPERTAL" loading="lazy" />
                <figcaption>
                    <h2>{HTMLReactParser(title)}</h2>
                    {HTMLReactParser(description)}
                </figcaption>
        </FigureItemWrapper>
    );
};

export default FigureItem;