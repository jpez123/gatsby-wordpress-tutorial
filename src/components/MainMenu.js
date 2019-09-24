//Import libraries
import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

//Style components
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3, 27, 77);
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
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItem to={item.object_slug} key={item.title}>
                    {item.title}
                </MenuItem>
            ))}
        </MainMenuWrapper>
    )} />
);

//Export
export default MainMenu;