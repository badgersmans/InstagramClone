import { useMutation, useQuery } from '@apollo/client';
import { createComment, getPost, updatePost } from './queries';
import { useMyAuthContext } from '../../contexts/AuthContext';
import { Alert } from 'react-native';

const useCommentService = (postId) => {

    const {userId} = useMyAuthContext();
    const [runUpdatePost] = useMutation(updatePost);
    const [runCreateComment, { loading, error }] = useMutation(createComment, {refetchQueries: ["CommentsByPost"]});
    const {data} = useQuery(getPost, {variables: { id: postId }});
    const post = data?.getPost;

    const incrementNofComments = async (amount: 1 | -1) => {
        if(!post) {
            Alert.alert('Failed to load post, try again later');
            return;
        }
        await runUpdatePost({
            variables: {
                input: {
                    id: post.id,
                    _version: post._version,
                    nofComments: post.nofComments + amount
                }
            }
        })
    }

    const onCreateComment = async (comment) => {
        if(!post) {
            Alert.alert('Failed to comment, try again later');
            return;
        }
        await runCreateComment({
          variables: {
            input: {
              postID: post.id,
              userID: userId,
              comment
            }
          }
        });
        incrementNofComments(1);
      }

    return {
        onCreateComment,
    }
};

export default useCommentService