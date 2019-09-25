//Import libraries
import React from "react";
import MainMenu from './MainMenu';
import {graphql, StaticQuery} from 'gatsby';
import { Helmet } from 'react-helmet';

//Styled components
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    
    body {
        font-family: 'Open Sans', sans-serif;
        padding: 0px !important;
        margin: 0px !important;
    }
`;

const LayoutWrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
`

//Component
const Layout = ({ children }) => (
  <div>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon {
          edges {
            node {
              url {
                id
                source_url
              }
            }
          }
        }
      }
    `} render={ props =>
      <Helmet>
        <title>ABC</title>
        <meta name="ABC" content="ABC" />
        <link rel="icon" type="image/png" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} sizes="16x16" />
      </Helmet>
    } />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

//Export
export default Layout;
