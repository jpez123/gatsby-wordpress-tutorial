//Import libraries
import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import SiteInfo from './SiteInfo';
import Logo from './Logo';

//Style components
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3, 27, 77);
`;

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0px auto;
    display: flex;
    width: 960px;
    height: 100%;
`;

const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 8px 16px;
`

//Component
const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems(filter: {
                name: {
                    eq: "main-menu"
                }
            }) {
                edges {
                    node {
                        name
                        items {
                            title
                            object_slug
                        }
                    }
                }
            }
        }
    `} render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
                <Logo />
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MenuItem to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )} />
);

//Export
export default MainMenu;