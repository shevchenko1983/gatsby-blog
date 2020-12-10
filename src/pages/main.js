import React from "react";
import styled from '../../node_modules/styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../utils/global-styles.css';
import {layoutStyles} from "../utils/styled-layout";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";
import Services from "../components/services/Services";



const LayoutWrapper = styled('div')`
    ${layoutStyles};
`;

const Main = () => {
    return(
        <LayoutWrapper>
            <Header/>
            <TopMenu/>
            <Services/>
        </LayoutWrapper>
    );
}

export default Main;