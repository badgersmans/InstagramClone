/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      postID
      commentID
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      Comment {
        id
        comment
        userID
        postID
        Likes {
          nextToken
          startedAt
        }
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        commentID
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comment {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        postID
        commentID
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comment {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        commentID
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comment {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesForPostByUser = /* GraphQL */ `
  query LikesForPostByUser(
    $postID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesForPostByUser(
      postID: $postID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        commentID
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comment {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesByCommentID = /* GraphQL */ `
  query LikesByCommentID(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByCommentID(
      commentID: $commentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        commentID
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comment {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      userID
      postID
      Likes {
        items {
          id
          userID
          postID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Post {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        userID
        postID
        Likes {
          nextToken
          startedAt
        }
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment
        userID
        postID
        Likes {
          nextToken
          startedAt
        }
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        userID
        postID
        Likes {
          nextToken
          startedAt
        }
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByPostID = /* GraphQL */ `
  query CommentsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        userID
        postID
        Likes {
          nextToken
          startedAt
        }
        Post {
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
        }
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      video
      image
      images
      nofComments
      nofLikes
      userID
      User {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      Comments {
        items {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
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
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        User {
          id
          name
          username
          email
          bio
          image
          nofPosts
          nofFollowers
          nofFollowings
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      nextToken
      startedAt
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
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
      nextToken
      startedAt
    }
  }
`;
