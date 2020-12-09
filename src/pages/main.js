import React from "react";
import styled from '../../node_modules/styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../utils/global-styles.css';
import {layoutStyles} from "../utils/styled-layout";



const LayoutWrapper = styled('div')`
    ${layoutStyles};
`;

const Main = () => {
    return(
        <LayoutWrapper>
            <h1>Main Page</h1>
        </LayoutWrapper>
    );
}

export default Main;