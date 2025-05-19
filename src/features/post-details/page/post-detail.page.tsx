import { useRouter } from "next/router";
import { Typography, Divider, Alert } from "@mui/material";
import {
  getPostDetails,
  getPostComments,
} from "../services/post-details.service";
import { getUserDetails } from "../../user-details/services/user.service";
import { usePostDetailsPage } from "../hooks/use-post-details-page.hook";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import BasePageComponent from "@/shared/components/base-page.component";
import BaseLandingPage from "@/shared/components/landing-page/base-landing.page";
import dynamic from "next/dynamic";
import { StyledContainer, SharedPageContainer } from "./post-detail.style";
import LoadingLandingPage from "@/shared/components/loading-landing-page/loading-landing-page.component";
import PostTitle from "../components/post-title.component";
import PostAuthor from "../components/post-author";
import PostContent from "../components/post-content";
import CommentsSection from "../components/comment-section";

const LoadingComponent = dynamic(
  () => import("../../../shared/components/loading/loading.component"),
  { ssr: false }
);

export default function PostDetailPage() {
  const { query } = useRouter();
  const postId = query.id as string;

  const {
    post,
    user,
    comments,
    isLoading,
    isCommentLoading,
    isCommentError,
    isUserLoading,
    userError,
  } = usePostDetailsPage(postId);

  if (isLoading || !post || !comments) {
    return <LoadingLandingPage />;
  }

  return (
    <BasePageComponent>
      <BaseLandingPage>
        <SharedPageContainer>
          <StyledContainer>
            <PostTitle title={post.title} />

            {isUserLoading ? (
              <LoadingComponent />
            ) : userError || !user ? (
              <Alert severity="error">Failed to load.</Alert>
            ) : (
              <PostAuthor user={user} />
            )}

            <PostContent body={post.body} />

            <Divider sx={{ my: 3 }} />

            {isCommentLoading ? (
              <LoadingComponent />
            ) : isCommentError ? (
              <Alert severity="error">Failed to load comments.</Alert>
            ) : comments.length === 0 ? (
              <Typography>No comments.</Typography>
            ) : (
              <CommentsSection comments={comments} />
            )}
          </StyledContainer>
        </SharedPageContainer>
      </BaseLandingPage>
    </BasePageComponent>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();
  const postId = context.params.id as string;

  await queryClient.prefetchQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostDetails(postId),
  });

  const post = await getPostDetails(postId);

  await queryClient.prefetchQuery({
    queryKey: ["comments", postId],
    queryFn: () => getPostComments(postId),
  });

  await queryClient.prefetchQuery({
    queryKey: ["user", post.userId],
    queryFn: () => getUserDetails(post.userId.toString()),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
