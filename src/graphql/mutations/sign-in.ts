import {gql} from "@apollo/client"

export const signInMutation = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      status
      error
      data {
        id
        appId
        username
        email
        phone
        token
        utc
        twoFactorEnabled
      }
    }
  }
`;