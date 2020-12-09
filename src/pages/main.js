import React from "react";
import styled from '../../node_modules/styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../utils/global-styles.css';
import {layoutStyles} from "../utils/styled-layout";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";



const LayoutWrapper = styled('div')`
    ${layoutStyles};
`;

const Main = () => {
    return(
        <LayoutWrapper>
            <Header/>
            <TopMenu/>
        </LayoutWrapper>
    );
}

export default Main;