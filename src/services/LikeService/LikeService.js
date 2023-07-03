import { useMutation, useQuery } from '@apollo/client';
import { createLike, deleteLike, likesForPostByUser, updatePost } from './queries';
import { useMyAuthContext } from '../../contexts/AuthContext';

const useLikeService = (post) => {
    const {userId} = useMyAuthContext();
    const {data: queryData, loading: queryLoading, error: queryError} = useQuery(likesForPostByUser, {variables: { postID: post.id, userID: { eq: userId } }});
    const userLike = (queryData?.likesForPostByUser?.items || []).filter(like => !like._deleted)?.[0];
    const [runUpdatePost] = useMutation(updatePost);
    const [runCreateLike, { loading, error }] = useMutation(createLike, { 
        variables: { input: { userID: userId, postID: post.id } },
        refetchQueries: ['LikesForPostByUser'],
    });
    const [runDeleteLike, { loading: loadingDelete, error: errorDelete }] = useMutation(deleteLike, { 
        variables: { input: { userID: userId, postID: post.id } },
        refetchQueries: ['LikesForPostByUser'],
    });
    const incrementNofLikes = async (amount: 1 | -1) => {
        await runUpdatePost({
            variables: {
                input: {
                    id: post.id,
                    _version: post._version,
                    nofLikes: post.nofLikes + amount
                }
            }
        })
    }

    const onAddLike = async () => {
        await runCreateLike();
        await incrementNofLikes(1)
    }
    const onDeleteLike = async () => {
        if(!userLike) {
            return;
        }

        await runDeleteLike({
            variables: {
                input: { id: userLike.id, _version: userLike._version }
            }
        });
        await incrementNofLikes(-1);
    }

    const toggleLike = () => {
        if(userLike) {
            onDeleteLike();
        } else {
            onAddLike();
        }
      }

    return {
        incrementNofLikes,
        toggleLike,
        isLiked: !!userLike,
    }
};

export default useLikeService;