import React from 'react';
import styled from '../../../node_modules/styled-components';
import SectionTopDescription from "../SectionTopDescription";
import {graphql, StaticQuery} from "gatsby";
import IconBox from "./IconBox";

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
                                 our_services {
                                    class_motion
                                    icon_class
                                    title_service
                                    description_service
                                 }
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
                                        animationName={"fadeInUp"}
                                        grid={"col-sm-6 offset-sm-3"}
                                    />
                                </div>
                                <div className="row">
                                    {data.wordpressPage?.acf?.our_services?.map((item, index) => {
                                        return <IconBox key={index}
                                                        title={item.title_service}
                                                        text={item.description_service}
                                                        icon={item.icon_class}
                                                        animationName={item.class_motion}
                                                />
                                    })}
                                </div>
                            </div>
                        </ServicesWrapper>
                    )
                }
        />

    );
};

export default Services;


