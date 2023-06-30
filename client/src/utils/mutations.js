import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String! $password: String!) {
    loginUser(email: $email, $password: String) {
      _id
      email
      password
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($email: String! $password: String!) {
    addUser(email: $email, $password: String) {
      _id
      email
      password
    }
  }
`
export const SAVE_BOOK = gql`
mutation saveBook($email: String!, $password: String!) {
    saveBook(email: $email, $password: String) {
    _id
    email
    password
  }
}
`
export const REMOVE_BOOK = gql`
mutation removeBook($email: String! $password: String!) {
    removeBook(email: $email $password: String) {
    _id
    email
    password
  }
}
`;