import React from "react";
import { useRouter } from "next/router";
import { useGetPostQuery } from "@/features/api/apiSlice";
import styles from "./styles.module.css";

const PostDetails = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    error: postError,
  } = useGetPostQuery(id);

  if (isPostLoading) {
    return <h2>Loading...</h2>;
  } else if (isPostError) {
    return <h2>An error occured : {postError.message}</h2>;
  }

  return (
    <div className={styles["post-details"]}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
