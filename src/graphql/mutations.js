/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        image
        bio
        username
        website
        nofPosts
        nofFollowers
        nofFollowings
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
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      username
      website
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      username
      website
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      username
      website
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
