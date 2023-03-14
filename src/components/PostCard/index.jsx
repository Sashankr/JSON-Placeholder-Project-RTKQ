import React from "react";
import styles from "./styles.module.css";

const PostCard = ({ id, title, userId, content }) => {
  return (
    <div className={styles["post-card"]}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
