//Import libraries
import React from 'react';
import Layout from '../components/Layout';

//Page template
export default ({pageContext}) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
);