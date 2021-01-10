import React from 'react';
import styled from '../../node_modules/styled-components';
import HTMLReactParser from "html-react-parser";
import {color, sizing} from "../utils/styled-layout";
import 'animate.css';

const SectionTopDescriptionWrapper = styled('div')`
    & .pfblock-header{
        margin-bottom: 30px;
        
        & .pfblock-subtitle,
        & .pfblock-subtitle p{
            color: ${color.smallTextColor};
            font-size: ${sizing.normal};
        }
    }
`;

const SectionTopDescription = ({content, animationName, grid}) => {
   let {title, description} = content;

    return(
        <SectionTopDescriptionWrapper className={`${grid} animate__animated animate__${animationName}`} data-wow-duration="0.8s">
            <div className="pfblock-header">
                { description ? (
                        <>
                            <h2 className="pfblock-title">{title}</h2>
                            <div className="pfblock-line"></div>
                            <div className="pfblock-subtitle">
                            {/*//Parse description like HTML object - > because it's coming like a String*/}
                            {HTMLReactParser(description)}
                            </div>
                        </>
                    )
                    :
                    //Parse title like HTML object - > because it's coming like a String
                    HTMLReactParser(title)
                }
            </div>
        </SectionTopDescriptionWrapper>
    );
};

export default SectionTopDescription;


