import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      email
      }
    }
  }
`

export const ADD_USER = gql`
mutation addUser($email: String! $username: String! $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      username
      _id
    }
  }
}
`

export const SAVE_BOOK = gql`
mutation saveBook($bookId: _id!) {
    saveBook(bookId: $_id, title: $title) {
    _id
    title
  }
}
`
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: _id!) {
  removeBook(bookId: $_id, title: $title) {
  _id
  title
}
}
`;