import React from 'react';
import styled from '../../../node_modules/styled-components';
import SectionTopDescription from "../SectionTopDescription";
import {graphql, StaticQuery} from "gatsby";
import FilterWorks from "./FilterWorks";

const PortfolioWrapper = styled('section')`
`;

const Portfolio = () => {
    return(
        <StaticQuery
            query={graphql`
                    {
                        wordpressPage(slug: {eq: "works"}) {
                            slug
                            content
                            acf {                               
                                my_works {
                                description_work
                                title_work
                                type_of_works
                                link
                                image_preview {
                                  localFile {
                                    childImageSharp {
                                      fixed{
                                        base64                                       
                                      }
                                    }
                                  }
                                }
                              }
                            }
                        }
                    }
            `}
            render={
                data => (
                    <PortfolioWrapper id={"portfolio"} className={"pfblock"}>
                        <div className="container">
                            <div className="row">
                                <SectionTopDescription content={{
                                        title: data.wordpressPage?.content
                                    }}
                                    animationName={"fadeInUp"}
                                    grid={"col-sm-12"}
                                />
                                <FilterWorks listItems={data.wordpressPage?.acf?.my_works}/>
                            </div>
                            <div className="row"></div>
                        </div>
                    </PortfolioWrapper>
                )
            }
        />

    );
};

export default Portfolio;