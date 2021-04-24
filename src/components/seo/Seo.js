import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import {Helmet} from "react-helmet";

const SEO = ({url, title, description, content}) => {
    return(
        <StaticQuery
            query={
                graphql`
                    {  site{
                        siteMetadata {
                          url
                          title
                          description
                          content
                        }
                      }
                    }                
                `}
         render={
            data => {
                const metaUrl = url ?? data.site?.siteMetadata?.url;
                const metaDescription = description ?? data.site?.siteMetadata?.description;
                const metaContent = content ?? data.site?.siteMetadata?.content;
                const metaTitle = title ?? data.site?.siteMetadata?.title;
                return(
                    <Helmet
                        defer={false}
                        title={metaTitle}
                        meta={
                            [
                                {
                                    name: `description`,
                                    content: metaDescription
                                },
                                {
                                    property: `og:title`,
                                    content: metaTitle
                                },
                                {
                                    property: `og:description`,
                                    content: metaDescription
                                },
                                {
                                    property: `og:type`,
                                    content: `website`
                                },
                                {
                                    property: `og:url`,
                                    content: metaUrl
                                },
                            ]
                        }
                    />
                );
            }
         }
        />
    );
};

export default SEO;