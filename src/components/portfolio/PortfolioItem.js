import React from 'react';
import styled from '../../../node_modules/styled-components';
import FigureItem from "./FigureItem";
import {color, font, sizing} from "../../utils/styled-layout";

const PortfolioItemWrapper = styled('div')`
    & .grid {
        position: relative;
        clear: both;
        margin: 0 auto;
        padding: 1em 0 4em;
        max-width: 100%;
        list-style: none;
        text-align: center;
        overflow: hidden;
        
        & h2{
            font-size: 1em;
            word-spacing: -0.15em;
            font-weight: ${font.lightWeight};
            margin: 0;
            
            & span{
                font-weight:${font.headingWeight};
                text-shadow: ${color.bubbaTextShadow};
            }
        }
        
        & p{
            margin: 0;
            letter-spacing: 1px;
            font-size: 68.5%;
        }
    }
    
    @media(max-width:500px){   
      .works-item{
        width: 100%;
      }
    }
    
`;

const PortfolioItem = ({title, link, image, description, workType}) => {

    return(
        <PortfolioItemWrapper className={`col-xs-12 col-sm-6 col-md-4 ${workType} works-item`}>
            <div className="grid wow zoomIn animated" style={{visibility: "visible", animationName: "zoomIn"}}>
                <a href={link} target={"_blank"}>
                    <FigureItem title={title}
                                image={image}
                                description={description}
                    />
                </a>
            </div>
        </PortfolioItemWrapper>
    );
};

export default PortfolioItem;
