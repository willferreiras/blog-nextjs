import PostDetailPage, {
  getServerSideProps,
} from "@/features/post-details/page/post-detail.page";
import Head from "next/head";

export default function Post() {
  return (
    <>
      <Head>
        <title>Blog - Post Details</title>
        <meta name="description" content="Detalhes do post do blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostDetailPage />
    </>
  );
}

export { getServerSideProps };
