//Import libraries
import React from 'react';
import Layout from '../components/Layout';
import PortfolioItems from '../components/PortfolioItems';

//Page template
export default ({pageContext}) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <PortfolioItems />
    </Layout>
);