import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useGetPostsQuery } from "@/features/api/apiSlice";
import { Skeleton } from "@mui/material";
import PostCard from "@/components/PostCard";

export default function Home() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const postsSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(posts, isLoading, isSuccess, isError, error);

  if (isLoading) {
    return (
      <section className={styles["posts-skeleton-container"]}>
        {postsSkeletons.map((item) => {
          return <Skeleton key={item} width={"100%"} height={300} />;
        })}
      </section>
    );
  } else if (isError) {
    return <div>An error has occured : {error.toString()}</div>;
  }

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="A blog generated using json placeholder api and rtk query"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <h1>My Blog</h1>
          <section className={styles["posts-container"]}>
            {posts.map((item) => {
              return (
                <PostCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  userId={item.userId}
                  content={item.body}
                />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
