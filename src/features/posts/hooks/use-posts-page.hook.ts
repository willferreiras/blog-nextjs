import { useMemo, useState } from "react";
import { usePosts } from "./use-posts.hook";
import { Post } from "../models/post.model";

export function usePostsPage() {
  const { data, isLoading, error } = usePosts();
  const [visibleCount, setVisibleCount] = useState(5);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const mansoryHighlights: Post[] = useMemo(
    () => data?.slice(0, 5) || [],
    [data]
  );
  const highlights: Post[] = useMemo(() => data?.slice(0, 6) || [], [data]);
  const remaining: Post[] = useMemo(
    () => data?.slice(6, visibleCount + 6) || [],
    [data, visibleCount]
  );

  const loadMore = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5);
      setIsFetchingMore(false);
    }, 2000);
  };

  return {
    mansoryHighlights,
    highlights,
    remaining,
    loadMore,
    isLoading,
    error,
    hasMore: (data?.length || 0) > visibleCount + 6,
    isFetchingMore,
  };
}
