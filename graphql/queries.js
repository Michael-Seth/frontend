import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;
const GET_ALL_POSTS = gql`
  query {
    blogPosts {
      data {
        attributes {
          Title
          urlSlug
          description
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          Title
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_ALL_SLUGS, GET_INDIVIDUAL_POST };
