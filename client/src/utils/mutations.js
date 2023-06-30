import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;