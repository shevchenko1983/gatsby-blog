// Fonts Picker
import {css} from "styled-components";

export const font = {
    fontFamily: [
        'Raleway',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
    ].join(),
    fontFamilyGruesa: [
        'Gruesa',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
    ].join(),
    lightWeight: 300,
    normalWeight: 400,
    mediumWeight: 500,
    headingWeight: 700,
};

// Text Size Picker
export const sizing = {
    default: '16px',
    big: '18px',
    heading: '20px',
    middleHeading: '22px',
    bigHeading: '24px',
    normal: '14px',
    text: '12px',
    small: '10px',
    tiny: '8px',
    large: '30px',
    huge: '40px',
};

// Colors Picker
export const color = {
    white: '#fff',
    black: '#000',
    lightGrey: '#f5f5f5',
    smallTextColor: '#666',
    pfBlockBorderColor: 'rgba(135, 135, 135, 0.5)',
    backgroundColor: '#f4f4f4',
    linkColor: '#E7746F',
    hoveredLinkColor: '#999',
    headingColor: '#222',
    inputBg: '#D8E1E4',
    inputBgBorderColor: 'rgba(135, 135, 135, 0.7)',
    btnBg: 'rgba(17, 17, 17, 0.8)',
    btnHoverBg: 'rgba(17, 17, 17, 1.8)',
    btnCallToAction: '#111',
    btnCallToActionBg: 'rgba(255, 255, 255, .8)',
    shadowText: '2px 1px 1px rgba(255,255,255,0.4)',
    bubbaTextShadow: '2px 1px 2px rgba(0, 0, 0, 0.86)',
    headerOverlay: 'rgba(44, 62, 80, 0.3)',
    workItemBgBubba: '#3085a3',
    bubbaBg: '#9e5406',
};


//Global Layout Style
export const layoutStyles = css`
    font-family: ${font.fontFamily};
    font-weight: ${font.lightWeight};
    font-size: ${sizing.normal};
    color: ${color.backgroundColor};
    overflow: hidden;
    
    a {
     color: ${color.linkColor};
     
     &:hover{
       text-decoration: none;
       color: ${color.hoveredLinkColor};
     }
    }
    
    .navbar a,
    .form-control {
     -webkit-transition: all 0.4s ease-in-out 0s;
     -moz-transition: all 0.4s ease-in-out 0s;
     -ms-transition: all 0.4s ease-in-out 0s;
     -o-transition: all 0.4s ease-in-out 0s;
     transition: all 0.4s ease-in-out 0s;
    }
    a,
    .btn {
     -webkit-transition: all 0.125s ease-in-out 0s;
     -moz-transition: all 0.125s ease-in-out 0s;
     -ms-transition: all 0.125s ease-in-out 0s;
     -o-transition: all 0.125s ease-in-out 0s;
     transition: all 0.125s ease-in-out 0s;
    }
    
    h1, h2, h3, h4, h5, h6 {
     font-family: ${font.fontFamily};
     font-weight: ${font.headingWeight};
     font-size: ${sizing.huge};    
     text-transform: uppercase;
     letter-spacing: 5px;
     margin: 5px 0 5px;
     color: ${color.headingColor};
    }
    
    h2 {
     font-size: ${sizing.large};
     margin: 0 0 30px;
    }
    
    h3 {
     font-size: ${sizing.normal};
     letter-spacing: 1px;
     margin: 0 0 5px;
    }
    
    h4 {
     font-size: ${sizing.text};
     letter-spacing: 1px;
    }
    
    h5,h6 {
     font-size: ${sizing.text};
     letter-spacing: 1px;
     font-weight: ${font.normalWeight};
    }
    
    .btn,
    .iconbox,
    .progress,
    #filter li,
    .scroll-up a,
    .form-control,
    .input-group-addon {
     -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
     -o-border-radius: 3px;
     border-radius: 3px;
    } 
    
    .container{
     padding-bottom: 0;
    }
    .pfblock {
     padding: 120px 0 100px;
    }
    
    .pfblock-gray {
     background: ${color.lightGrey};
    }
    
    .pfblock-image {
     padding: 0;
    }
    
    .calltoaction h1,
    .calltoaction h2,
    .calltoaction h3,
    .calltoaction h4,
    .calltoaction h5,
    .calltoaction h6,
    .pfblock-image,
    .pfblock-image h1,
    .pfblock-image h2,
    .pfblock-image h3,
    .pfblock-image h4,
    .pfblock-image h5,
    .pfblock-image h6 {
     color: ${color.white};
    }
    
    .pfblock-header {
     text-align: center;
     margin: 0 0 60px;
    }
    
    .pfblock-header-left {
     text-align: left;
    }
    
    .pfblock-header-left .pfblock-line {
     width: inherit;
     margin: 30px 0;
    }
    
    .pfblock-title{
      font-weight: 800;
    }
    
    .pfblock-subtitle,
    .pfblock-subtitle p {
     font-family: ${font.fontFamily};
     font-style: normal;
     font-size: ${sizing.big};
     font-weight: ${font.normalWeight};
    }
    
    .pfblock-line {
     background: ${color.pfBlockBorderColor};
     width: 100px;
     height: 2px;
     margin: 30px auto;
    }
    
    .pfblock-icon {
     font-size: ${sizing.large};
    }
    .calltoaction *{
     text-align: center;
    }
    .calltoaction {
     // background: url(../images/item-3.jpg);
     background-color: ${color.headingColor};
     background-repeat: no-repeat;
     background-position: 0 0;
     -webkit-background-size: cover;
       -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
     padding: 50px 0;
     color: ${color.hoveredLinkColor};
    }
    
    .calltoaction h2 {
     font-size: ${sizing.normal};
     letter-spacing: 1px;
     margin-bottom: 5px;
    }
    
    .calltoaction-decription{
        padding-top: 20px;
        padding-bottom: 30px;
        font-size: ${sizing.heading};
        color: ${color.white};
    }
    
    .calltoaction-btn {
     text-align: center;
    }
    
    .calltoaction-btn > .btn {
      background: ${color.btnCallToActionBg};
      color: ${color.btnCallToAction};
      margin: 5px 0px;     
    }
    .calltoaction-btn > .btn:hover{
        background: ${color.white};
    }
    
    .long-down {
     margin-bottom: 40px;
    }


`;


//Input Styles
export const inputsStyles = css`
    .input-group .form-control {
      z-index: auto;
    }
    
    .input-group-addon {
     background: ${color.inputBg};
     border: 2px solid ${color.inputBg};
     padding: 6px 15px;
     font-weight: ${font.headingWeight};
    }
    
    .form-control {
     background: ${color.white};
     border: 1px solid ${color.inputBg};
     font-size: ${sizing.text};
     padding: 0 15px;
    }
    
    .form-control:focus{
      border-color: ${color.inputBgBorderColor};
    }
    
    .input-lg,
    .form-horizontal .form-group-lg .form-control {
     height: 38px;
     font-size: ${sizing.text};
    }
    
    .input-sm,
    .form-horizontal .form-group-sm .form-control {
     font-size: 11px;
     height: 30px;
    }
    
    textarea.form-control {
     padding: 15px;
     max-width: 100%;
     min-width: 100%;
    }
`;


//Buttons Styles
export const btnStyles = css`
    .btn {
     font-family: ${font.fontFamily};
     text-transform: uppercase;
     letter-spacing: 1px;
     font-size: ${sizing.normal};
     padding: 8px 26px;
     border: 0;
    }
    
    .btn:hover,
    .btn:focus,
    .btn:active,
    .btn.active {
     outline: inherit !important;
    }
    
    /* Button size */
    
    .btn-lg,
    .btn-group-lg > .btn {
     padding: 10px 25px;
     font-size: ${sizing.normal};
     background: ${color.btnBg};
     color: ${color.white};
    }
    .btn-lg:hover,
    .btn-group-lg > .btn:hover{
        background: ${color.btnHoverBg};
        color:${color.white};
    }
    
    .btn-sm,
    .btn-group-sm > .btn {
     padding: 6px 25px;
     font-size: ${sizing.text};
    }
    
    .btn-xs,
    .btn-group-xs > .btn {
     padding: 5px 25px;
     font-size: ${sizing.small};
    }
    
    .btn .icon-before {
     margin-right: 6px;
    }
    
    .btn .icon-after {
     margin-left: 6px;
    }

`;