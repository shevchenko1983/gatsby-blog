import React from 'react';
import styled from '../../../node_modules/styled-components';
import SectionTopDescription from "../SectionTopDescription";
import {graphql, StaticQuery} from "gatsby";

const ServicesWrapper = styled('section')`
  
`;

const Services = () => {

    return(
        <StaticQuery query={graphql`
                    {
                        wordpressPage(slug: {eq: "services"}) {
                            slug
                            content
                            acf {
                                title
                                title_description
                            }
                        }
                    }
                `}
                render={
                    data => (
                        <ServicesWrapper id="services" className={"pfblock pfblock-gray"}>
                            <div className="container">
                                <div className="row">
                                    <SectionTopDescription
                                        content={{
                                            title: data.wordpressPage?.acf?.title,
                                            description: data.wordpressPage?.acf?.title_description
                                        }}
                                    />
                                </div>
                            </div>
                        </ServicesWrapper>
                    )
                }
        />

    );
};

export default Services;


