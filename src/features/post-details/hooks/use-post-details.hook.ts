import { useQuery } from "@tanstack/react-query";
import {
  getPostComments,
  getPostDetails,
} from "../services/post-details.service";
import { Comment } from "../models/comment.model";
import { Post } from "@/features/posts/models/post.model";

export const usePostDetails = (postId: string) => {
  return useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => getPostDetails(postId),
    enabled: !!postId,
  });
};

export const usePostComments = (postId: string) => {
  return useQuery<Comment[]>({
    queryKey: ["postComments", postId],
    queryFn: () => getPostComments(postId),
    enabled: !!postId,
  });
};
