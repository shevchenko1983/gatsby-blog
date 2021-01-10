import React from 'react';
import styled from '../../../node_modules/styled-components';
import {graphql, StaticQuery} from "gatsby";
import SectionTopDescription from "../SectionTopDescription";
import ContactForm from "./ContactForm";

const ContactsWrapper = styled('section')`
  
`;
const Contacts = () => {
    return(
        <StaticQuery
            query={graphql`
            {
                 wordpressPage(slug: {eq: "contact"}) {
                    id
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
                <ContactsWrapper id="contact" className={"pfblock pfblock-gray"}>
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
                            <ContactForm/>
                        </div>
                    </div>
                </ContactsWrapper>
             )
         }
        />

    );
}

export default Contacts;