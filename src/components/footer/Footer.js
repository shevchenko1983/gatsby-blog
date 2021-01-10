import React from 'react';
import styled from 'styled-components';
import {color} from "../../utils/styled-layout";
import FooterSocial from "./FooterSocial";

const FooterWrapper = styled('footer')`    
    background: ${color.headingColor};
    text-align: center;
    padding: 40px 0;
    color: ${color.white}; 
    
    .copyright {
      margin: 0;
       & a{
          border-bottom: 1px dotted ${color.white};
        }  
    }
   
`;

const Footer = () => {
    return (
        <FooterWrapper id={"footer"} className={"site-footer"}>
            <div className="container">
                <div className="row">
                    <div className="site-footer-inner col-sm-12">
                        <FooterSocial/>
                        <p className="copyright">&copy; {new Date().getFullYear()} Andrey Snevchenko</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
};

export default Footer;