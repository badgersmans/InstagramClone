import {gql} from '@apollo/client'

export const listPosts = gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments(limit: 2) {
          items {
            id
            comment
            User {
              id
              name
            }
          }
          startedAt
          nextToken
        }
        Likes {
          items {
            id
            _deleted
            User {
              id
              username
            }
          }
          startedAt
          nextToken
        }
      }
      nextToken
      startedAt
    }
  }
`;