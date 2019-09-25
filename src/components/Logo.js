import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    width: 50px;
    margin-right: 10px;
`;

const LogoImg = styled.img`
    display: block;
    width: 100%;
`;

const Logo = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpLogo {
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
    `} render={props => {
        return (
            <LogoWrapper>
                <LogoImg src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
            </LogoWrapper>
        )
    }} />
);

export default Logo;