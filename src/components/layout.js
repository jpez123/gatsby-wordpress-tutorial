//Import libraries
import React from "react";
import MainMenu from './MainMenu';

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
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

//Export
export default Layout;
