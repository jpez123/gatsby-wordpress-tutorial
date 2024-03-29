//Import libraries
import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

//Styled Component
const PortfolioItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const PortfolioItem = styled.div`
    width: 45%;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;
    box-sizing: border-box;
`;

const PortfolioImage = styled.img`
    max-width: 100%;
`;

//Component
const PortfolioItems = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
                edges {
                    node {
                        id
                        content
                        title
                        excerpt
                        slug
                        featured_media {
                            source_url
                        }
                    }
                }
            }
        }
    `} render={ props => {
        return (
            <PortfolioItemsWrapper>
                {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
                    <PortfolioItem key={portfolioItem.id}>
                        <h2>{portfolioItem.node.title}</h2>
                        <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                        <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
                        <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                            Read More
                        </Link>
                    </PortfolioItem>
                ))}
            </PortfolioItemsWrapper>
        )
    }} />
);

//Export
export default PortfolioItems;