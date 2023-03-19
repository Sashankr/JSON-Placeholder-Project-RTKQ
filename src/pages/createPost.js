import React, { useId, useState } from "react";
import globalStyle from "@/styles/Home.module.css";
import styles from "@/styles/createPost.module.css";
import Navbar from "@/components/Navbar";
import { useAddNewPostMutation } from "@/features/api/apiSlice";

const initialValues = {
  title: "",
  body: "",
  userId: "",
};

const createPost = () => {
  const [values, setValues] = useState(initialValues);
  const { title, body, userId } = values;

  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const canSave = [title, body, userId].every(Boolean) && !isLoading;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        await addNewPost({ title, body, useId }).unwrap();
        setValues(initialValues);
      } catch (err) {
        console.error("Failed to save post", err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className={globalStyle.container}>
        <div className={styles["create-post"]}>
          <h1>Create New Post</h1>
          <p>Fill the following fields to create a new post</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              value={title}
              onChange={handleChange}
            />
            <textarea
              value={body}
              name="body"
              id=""
              cols="30"
              rows="10"
              placeholder="Body"
              required
              onChange={handleChange}
            ></textarea>
            <input
              type="text"
              name="userId"
              placeholder="UserId"
              required
              onChange={handleChange}
              value={userId}
            />
            <button type="submit" disabled={isLoading}>
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default createPost;
