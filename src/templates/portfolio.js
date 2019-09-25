//Import libraries
import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

//Styled Component
const FeaturedImage = styled.img`
    max-width: 300px;
    margin: 16px 0;
`;

//Page template
export default ({pageContext}) => (
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        <strong>
            Website URL:
        </strong>
        <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">
            {pageContext.acf.portfolio_url}
        </a>
        <div>
            <FeaturedImage src={pageContext.featured_media.source_url} />
        </div>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
);