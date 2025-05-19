import { usePostDetails, usePostComments } from "./use-post-details.hook";
import { useUserDetails } from "../../user-details/hooks/use-user.hook";

export function usePostDetailsPage(postId: string) {
  const { data: post, isLoading, error } = usePostDetails(postId);

  const {
    data: comments,
    isLoading: isCommentLoading,
    error: isCommentError,
  } = usePostComments(postId);

  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useUserDetails(post?.userId?.toString() ?? "");

  return {
    post,
    isLoading,
    error,

    comments,
    isCommentLoading,
    isCommentError,

    user,
    isUserLoading,
    userError,
  };
}
