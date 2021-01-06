import React from 'react';
import styled from '../../../node_modules/styled-components';
import {color, sizing} from "../../utils/styled-layout";


const FilterWorksWrapper = styled('div')`
    &.filter-works{
     text-align: center;
     position: relative;    
    }
    &.filter-works ul{
     list-style-type: none;
     
         & li{
             display: inline-block;
             margin: 0 15px;
             cursor:pointer;
             font-size: ${sizing.default};
             letter-spacing: 3px;
             color: ${color.headingColor};
             font-weight: 600;
             border-bottom: 1px solid transparent;
             
             &:first-child{
                 margin-left: 0;
             }
             &:active,
             &:hover{
                border-bottom: 1px solid ${color.linkColor};
             }
         }     
    }
    
    @media(max-width:991px){      
        &.filter-works ul li{
            display: inline-block;
            padding: 10px 0px;
            width: 50%;
       }
    }
    
    @media(max-width:640px){
        &.filter-works ul li{
            width: 80%;
        }
    }
    
    @media(max-width:500px){
        &.filter-works ul{
            padding-left: 0;
        }
        &.filter-works ul li{
            width: 100%;
            margin: auto;
        }    
    }  
`;

const FilterWorks = ({listItems, filterAction}) => {
    //get uniqueValues
    const typeOfWorks = [...new Set(listItems.map((item, index) => item.type_of_works.split(" ")[0]))];
    return(
        <FilterWorksWrapper className={"col-sm-12 filter-works"}>
            <ul>
                <li className="all" onClick={() => filterAction("all")}>All</li>
                {typeOfWorks && typeOfWorks.map((item, index) => {
                    return <li key={index}
                               className={`${item}-filter`}
                               onClick={() => filterAction(item)}
                            >
                        {`${item === 'wordpress' ? 'Site - Branding / WordPress' : 'Online stores / WooCommerce'}`}
                            </li>
                })}

            </ul>
        </FilterWorksWrapper>
    );
};

export default FilterWorks;