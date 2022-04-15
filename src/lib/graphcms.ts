import { GraphQLClient, gql } from "graphql-request";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export const GET_SELECTED_WORK = gql`
  query GetSelectedWork {
    projects(where: { selectedProject: true }, orderBy: order_ASC) {
      id
      title
      projectType
      description
      techs
      liveSite
      repoLink
      slug
      cover {
        height
        width
        url
      }
      typeOfWork
    }
  }
`;

export const GET_ALL_WORK = gql`
  query GetAllWork {
    projects(orderBy: order_ASC) {
      id
      title
      projectType
      description
      techs
      liveSite
      repoLink
      slug
      cover {
        height
        width
        url
      }
    }
  }
`;
