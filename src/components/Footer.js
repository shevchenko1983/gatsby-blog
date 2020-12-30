import React from 'react';
import styled from '../../node_modules/styled-components';
import {color} from "../utils/styled-layout";

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
            <divf className="container">
                <div className="row">
                    <div className="site-footer-inner col-sm-12">
                        <p className="copyright">&copy; {new Date().getFullYear()} Andrey Snevchenko</p>
                    </div>
                </div>
            </divf>
        </FooterWrapper>
    )
};

export default Footer;