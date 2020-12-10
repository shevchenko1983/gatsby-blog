import React from 'react';
import styled from '../../node_modules/styled-components';
import HTMLReactParser from "html-react-parser";
import {color, sizing} from "../utils/styled-layout";

const SectionTopDescriptionWrapper = styled('div')`
    & .pfblock-header{
        margin-bottom: 30px;
        
        & .pfblock-subtitle p{
            color: ${color.smallTextColor};
            font-size: ${sizing.normal};
        }
    }
`;

const SectionTopDescription = ({content}) => {
   let {title, description} = content;

    return(
        <SectionTopDescriptionWrapper className="col-sm-6 offset-sm-3">
            <div className="pfblock-header wow fadeInUp">
                <h2 className="pfblock-title">{title}</h2>
                <div className="pfblock-line"></div>
                <div className="pfblock-subtitle">
                    {/*//Parse description like HTML object - > because it's coming like a String*/}
                    {HTMLReactParser(description)}
                </div>
            </div>
        </SectionTopDescriptionWrapper>
    );
};

export default SectionTopDescription;


