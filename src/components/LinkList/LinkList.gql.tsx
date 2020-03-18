import gql from 'graphql-tag';

// step 7b
export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;