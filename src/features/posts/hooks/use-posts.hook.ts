import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostsByUser } from "../services/post.service";
import { Post } from "../models/post.model";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const usePostsByUser = (userId: string) => {
  return useQuery<Post[]>({
    queryKey: ["postsByUser", userId],
    queryFn: () => getPostsByUser(userId),
    enabled: !!userId,
  });
};
