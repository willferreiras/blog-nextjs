import { usePostsByUser } from "@/features/posts/hooks/use-posts.hook";
import { useUserDetails } from "./use-user.hook";
import { useMemo, useState } from "react";
import { Post } from "@/features/posts/models/post.model";

export function useUserDetailsPage(userId: string) {
  const [visibleCount, setVisibleCount] = useState(10);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const { data: user, isLoading, error } = useUserDetails(userId);
  const {
    data: posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = usePostsByUser(userId);

  const remaining: Post[] = useMemo(
    () => posts?.slice(0, visibleCount + 6) || [],
    [posts, visibleCount]
  );

  const loadMore = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsFetchingMore(false);
    }, 2000);
  };

  return {
    user,
    isLoading,
    error,

    posts,
    isPostsLoading,
    postsError,

    loadMore,
    remaining,
    hasMore: (posts?.length || 0) > visibleCount + 6,
    isFetchingMore,
  };
}
