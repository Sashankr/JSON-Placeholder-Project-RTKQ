import React from "react";
import globalStyle from "@/styles/Home.module.css";
import styles from "@/styles/createPost.module.css";
import Navbar from "@/components/Navbar";

const createPost = () => {
  return (
    <div>
      <Navbar />
      <div className={globalStyle.container}>
        <div className={styles["create-post"]}>
          <h1>Create New Post</h1>
          <p>Fill the following fields to create a new post</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Title" required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Body"
              required
            ></textarea>
            <input type="text" placeholder="UserId" required />
            <button type="submit">Create Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default createPost;
