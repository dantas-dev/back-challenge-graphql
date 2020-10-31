import { gql } from 'apollo-server';

export default gql`
  type Project {
    id: Int!;
    name: String!;
    price: Float!;
    user_id: Int!;
  }
`;
