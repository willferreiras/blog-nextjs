import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Container, Skeleton, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import {
  ContentContainer,
  PostContainer,
  Footer,
  NewsScroller,
  SliderContainer,
  PostsWrapper,
  MansoryGridContainer,
} from "./posts.style";

import BasePageComponent from "@/shared/components/base-page.component";
import BaseLandingPage from "@/shared/components/landing-page/base-landing.page";
import {
  SharedPageContainer,
  SharedPageLoadingContainer,
} from "@/shared/styles/shared.style";
import { PostCarousel } from "../components/carousel/carousel.component";
import { getPosts } from "../services/post.service";
import { usePostsPage } from "../hooks/use-posts-page.hook";
import { PostCard } from "../components/card/card.component";
import dynamic from "next/dynamic";
import { MasonryGrid } from "../components/mansory-grid/grid.component";

const LoadingComponent = dynamic(
  () => import("../../../shared/components/loading/loading.component"),
  {
    ssr: false,
  }
);

export default function PostsPage() {
  const {
    mansoryHighlights,
    loadMore,
    remaining,
    highlights,
    isLoading,
    error,
    hasMore,
    isFetchingMore,
  } = usePostsPage();
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !isFetchingMore) {
        loadMore();
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, isFetchingMore, loadMore]);

  if (isLoading) {
    return (
      <Container>
        <Skeleton variant="text" height={50} width={200} />
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={200} sx={{ my: 2 }} />
        ))}
      </Container>
    );
  }

  if (error) return <p>Failed to load.</p>;

  return (
    <BasePageComponent>
      <BaseLandingPage>
        <SharedPageContainer>
          <ContentContainer>
            <MansoryGridContainer>
              <MasonryGrid posts={mansoryHighlights} />
            </MansoryGridContainer>

            <SliderContainer>
              <PostCarousel posts={highlights} />
            </SliderContainer>

            <PostsWrapper>
              <PostContainer>
                {remaining.map((post) => (
                  <PostCard post={post} key={post.id} />
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
          </ContentContainer>
          <Footer>
            <NewsScroller>
              <span>© Copyright 2025 - @willfereiras</span>
            </NewsScroller>
          </Footer>
        </SharedPageContainer>
      </BaseLandingPage>
    </BasePageComponent>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
