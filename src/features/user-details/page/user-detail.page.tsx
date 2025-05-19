import { useRouter } from "next/router";
import { getUserDetails } from "../services/user.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import BasePageComponent from "@/shared/components/base-page.component";
import BaseLandingPage from "@/shared/components/landing-page/base-landing.page";
import dynamic from "next/dynamic";
import {
  StyledContainer,
  SharedPageContainer,
  PostsWrapper,
  PostContainer,
} from "./user-detail.style";
import LoadingLandingPage from "@/shared/components/loading-landing-page/loading-landing-page.component";
import { getPostsByUser } from "@/features/posts/services/post.service";
import { useUserDetailsPage } from "../hooks/use-user-details-page.hook";
import { Skeleton, Stack } from "@mui/material";
import { PostCard } from "@/features/posts/components/card/card.component";
import { useEffect, useRef } from "react";
import { SharedPageLoadingContainer } from "@/shared/styles/shared.style";
import UserPostsHeader from "../components/user-header.component";

const LoadingComponent = dynamic(
  () => import("../../../shared/components/loading/loading.component"),
  { ssr: false }
);

export default function UserDetailPage() {
  const { query } = useRouter();
  const userId = query.id as string;

  const {
    posts,
    user,
    isLoading,
    error,
    loadMore,
    remaining,
    hasMore,
    isFetchingMore,
  } = useUserDetailsPage(userId);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !isFetchingMore) {
        loadMore();
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, isFetchingMore]);

  if (error) return <p>Failed to load.</p>;

  if (isLoading || !user || !posts) {
    return <LoadingLandingPage />;
  }

  return (
    <BasePageComponent>
      <BaseLandingPage>
        <SharedPageContainer>
          <StyledContainer>
            <UserPostsHeader
              name={user.name}
              email={user.email}
              companyName={user.company.name}
              address={user.address}
            />

            <PostsWrapper>
              <PostContainer>
                {remaining.map((post) => (
                  <PostCard post={post} />
                ))}
                {hasMore && (
                  <Stack ref={loaderRef} py={2}>
                    {isFetchingMore ? (
                      <SharedPageLoadingContainer>
                        <LoadingComponent />
                      </SharedPageLoadingContainer>
                    ) : (
                      [...Array(2)].map((_, i) => (
                        <Skeleton
                          key={i}
                          variant="rectangular"
                          height={180}
                          sx={{ my: 2 }}
                        />
                      ))
                    )}
                  </Stack>
                )}
              </PostContainer>
            </PostsWrapper>
          </StyledContainer>
        </SharedPageContainer>
      </BaseLandingPage>
    </BasePageComponent>
  );
}

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();
  const userId = context.params.id as string;

  await queryClient.prefetchQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserDetails(userId),
  });

  await queryClient.prefetchQuery({
    queryKey: ["user-posts"],
    queryFn: () => getPostsByUser(userId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
