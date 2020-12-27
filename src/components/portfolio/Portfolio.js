import React, {useState} from 'react';
import styled from '../../../node_modules/styled-components';
import SectionTopDescription from "../SectionTopDescription";
import {graphql, StaticQuery} from "gatsby";
import FilterWorks from "./FilterWorks";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = styled('section')`
`;

const Portfolio = () => {
    const [workType, setWorkType] = useState("all");
    const onFilterWorkTypeHandler = (workType) => {
        setWorkType(workType);
    };
    console.log(workType)
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
                                      fixed(height: 400){
                                         ...GatsbyImageSharpFixed                                     
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
                                <FilterWorks listItems={data.wordpressPage?.acf?.my_works}
                                             filterAction={onFilterWorkTypeHandler}
                                />
                            </div>
                            <div className="row">
                                {workType === "all" ? data.wordpressPage?.acf?.my_works.map((item, index) => {
                                    return <PortfolioItem key={index}
                                                          title={item.title_work}
                                                          image={item.image_preview?.localFile?.childImageSharp?.fixed}
                                                          link={item.link}
                                                          description={item.description_work}
                                                          workType={item.type_of_works}
                                            />
                                }) : data.wordpressPage?.acf?.my_works.filter((item, index) => item.type_of_works.includes(workType)).map((item, index) => {
                                    return <PortfolioItem key={index}
                                                        title={item.title_work}
                                                        image={item.image_preview?.localFile?.childImageSharp?.fixed}
                                                        link={item.link}
                                                        description={item.description_work}
                                                        workType={item.type_of_works}
                                            />
                                })}
                            </div>
                        </div>
                    </PortfolioWrapper>
                )
            }
        />

    );
};

export default Portfolio;