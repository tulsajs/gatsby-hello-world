import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Header = styled.h3`
  background-color: rebeccapurple;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Post = styled.div`
  width: calc(33% - 20px);
  @media (max-width: 720px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 440px) {
    width: calc(100% - 20px);
  }
  margin: 10px;
`;

const IndexPage = ({ data: { allMediumPost } }) => {
  return (
    <PostWrapper>
      {allMediumPost.edges.map(edge => {
        return (
          <Post key={edge.node.id}>
            <Header>
              <a
                target="_blank"
                href={`https://medium.com/@nearbycoder/${edge.node.id}`}>
                {edge.node.title}
              </a>
            </Header>
            <h5>{edge.node.virtuals.subtitle}</h5>
            {edge.node.virtuals.previewImage.imageId ? (
              <img
                height="200px"
                src={`https://cdn-images-1.medium.com/max/2000/${
                  edge.node.virtuals.previewImage.imageId
                }`}
              />
            ) : (
              <img height="200px" src={`http://via.placeholder.com/350x150`} />
            )}
          </Post>
        );
      })}
      <Link to="/page-2/">Go to page 2</Link>
    </PostWrapper>
  );
};

export default IndexPage;

export const query = graphql`
  query StoriesQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`;
