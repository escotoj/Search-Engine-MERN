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
mutation saveBook($bookId: _id!) {
    saveBook($bookId: _id!, title: $title) {
    _id
    title
  }
}
`
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: _id!) {
  removeBook($bookId: _id!, title: $title) {
  _id
  title
}
}
`;