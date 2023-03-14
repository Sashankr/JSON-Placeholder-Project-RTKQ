import React from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const PostCard = ({ id, title, userId, content }) => {
  const router = useRouter();

  return (
    <div
      className={`${styles["post-card"]}`}
      onClick={() => {
        router.push(`/posts/${id}`);
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
