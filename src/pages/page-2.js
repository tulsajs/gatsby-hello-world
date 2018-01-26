import React from 'react';
import Link from 'gatsby-link';

const SecondPage = ({ data }) => {
  console.log(data);
  const { edges } = data.allStarWarsPeopeJson;
  return (
    <div>
      {edges.map(edge => {
        return <div key={edge.node.id}>{edge.node.name}</div>;
      })}
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default SecondPage;

export const query = graphql`
  query StarWarsQuery {
    allStarWarsPeopeJson {
      edges {
        node {
          id
          gender
          starships
          name
        }
      }
    }
  }
`;
