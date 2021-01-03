import React, {useState} from 'react';
import {graphql, StaticQuery} from "gatsby";
import styled from '../../node_modules/styled-components';
import {color, font, sizing} from "../utils/styled-layout";
import {CgMenu} from "react-icons/cg";
import {Link} from "react-scroll";

const TopMenuWrapper = styled('div')`
    & .header {
     border-bottom: 1px solid ${color.lightGrey};
     position: relative;
     width: 100%;
     z-index: 998;
    
    & .navbar.navbar-custom{
      margin-bottom: 0;
      &.navbar-custom {
         border: 0;
         border-radius: 0;
         margin: 0;
         text-transform: uppercase;   
         font-weight: ${font.headingWeight};
      }
    }   
    
    & .navbar-custom,
    & .navbar-custom .dropdown-menu {
     background: ${color.white};
     padding: 0;
    }   
    & .navbar-custom .navbar-brand,
    & .navbar-custom .navbar-nav > li > a,
    & .navbar-custom .navbar-nav .dropdown-menu > li > a {
     font-size: ${sizing.small};
     letter-spacing: 3px;
     color: ${color.headingColor};
     border-bottom: 1px solid transparent;
    }
    
    & .navbar-custom li.active,
    & .navbar-custom li a:hover,
    & .navbar-custom li a:focus,
    & .navbar-custom > li.active a {
     background: none;
     outline: 0;
     color: ${color.linkColor};   
    }
    & .navbar-custom > li.active a:hover{
      background-color: ${color.lightGrey};
    }
    & .navbar-custom li a:hover{
     border-bottom: 1px solid ${color.linkColor};
     transition:  0.2s ease-in;
    }
    & .navbar-custom .navbar-brand {
     font-weight: ${font.headingWeight};
     font-size: ${sizing.middleHeading};
     font-family: ${font.fontFamilyGruesa};
    }
    
    & .navbar-custom .dropdown-menu {
     border: 0;
     border-top: 2px solid ${color.linkColor};
     border-radius: 0;
    }
    
    & .navbar-custom .dropdown-menu > li > a {
     padding: 10px 20px;
    }
    
    & .navbar-custom .open > a,
    & .navbar-custom .dropdown-menu > li > a:hover,
    & .navbar-custom .dropdown-menu > li > a:focus {
     background: ${color.lightGrey};
    }
    & .navbar-custom .navbar-toggler:focus,
    & .navbar-custom .navbar-toggler:active{
        outline: none;
    }
    & .navbar-custom .navbar-toggler svg{
     color: ${color.linkColor};          
    }
    & .navbar-custom .navbar-toggler.collapsed svg{
     color: ${color.headingColor};
    }
    & .navbar-default{
     background-color: transparent;
     border:none;
     width: 100%;
    }
    & .navbar-collapse{
       justify-content: flex-end;
    }    
  }    
   
   @media (max-width: 1240px){
    & .navbar-header{
        // width: 100%;
        display: flex;
        justify-content: space-between;
    }
   }
   
   @media(max-width:991px){
     .nav>li>a{
        padding: 10px 5px;
        font-size: ${sizing.small};
        line-height: 30px;
     }    
   }
   
   @media(max-width:400px){
    .navbar-custom .navbar-brand{
        font-size: ${sizing.default};
    }
  }
   
`;

const TopMenu = () => {
    const [clickOnMobileBtn, setClickOnMobileBtn] = useState(false);
    let onClickMobileMenuHandle = () => {
        setClickOnMobileBtn(!clickOnMobileBtn);
    };
    return(
        <StaticQuery
            query={
              graphql`
                 { 
                    wordpressWpApiMenusMenusItems {                      
                      items {
                        title                       
                        url
                      }
                   } 
                 }    
             `}
            render={data => (
                <TopMenuWrapper className={"top-menu"}>
                    <header className={"header"}>
                        <nav className="navbar navbar-expand-lg navbar-custom">
                            <div className="container">
                                <div className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="/">Andrey Shevchenko</a>
                                        <button className={ clickOnMobileBtn ? "navbar-toggler" : "navbar-toggler collapsed"} type="button" data-toggle="collapse" data-target="#navbarNav"
                                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={onClickMobileMenuHandle}>
                                                <CgMenu/>
                                        </button>
                                    </div>

                                    <div className={ clickOnMobileBtn ? "collapse navbar-collapse show" : "collapse navbar-collapse" } id="navbarNav">
                                        <ul className="navbar-nav">
                                            {data.wordpressWpApiMenusMenusItems?.items.map((item, index) => {
                                                return  <li className="nav-item">
                                                             <Link  key={item.title + index}
                                                                    className={"nav-link"}
                                                                    //activeClass="active"
                                                                    href={item.url}
                                                                    to={item.title.toLowerCase()}
                                                                    spy={true}
                                                                    smooth={true}
                                                                    offset={0}
                                                                    duration={1000}
                                                                >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </header>
                </TopMenuWrapper>
            )}
        />
    );
};

export default TopMenu;