import Head from "next/head";
import PostsPage, {
  getServerSideProps,
} from "@/features/posts/page/posts.page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog - Home</title>
        <meta name="description" content="Landing page do blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsPage />
    </>
  );
}

export { getServerSideProps };
