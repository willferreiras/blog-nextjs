import UserDetailPage, {
  getServerSideProps,
} from "@/features/user-details/page/user-detail.page";
import Head from "next/head";

export default function User() {
  return (
    <>
      <Head>
        <title>Blog - User Details</title>
        <meta name="description" content="Detalhes do usuario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserDetailPage />
    </>
  );
}

export { getServerSideProps };
