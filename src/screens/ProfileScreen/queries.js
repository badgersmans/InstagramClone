import {gql} from '@apollo/client'

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      bio
      image
      nofPosts
      nofFollowers
      nofFollowings
      Posts {
        items {
            id
            image
            images
            video
        }
        nextToken
        startedAt
      }
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;