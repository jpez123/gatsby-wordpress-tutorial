//Import libraries
import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

//Styled Component
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: #fff;
    margin: auto 0;
`;

const SiteTitle = styled.div`
    font-weight: 800;
`;

//Component
const SiteInfo = () => (
    <StaticQuery query={graphql`
        {
            allWordpressSiteMetadata {
                edges {
                    node {
                        name
                        description
                    }
                }
            }
        }
    `} render={ props => (
        <SiteInfoWrapper>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            <div>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </div>
        </SiteInfoWrapper>
    )} />
)

//Export
export default SiteInfo;