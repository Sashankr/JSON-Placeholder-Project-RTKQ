import React from "react";
import { useRouter } from "next/router";

const PostDetails = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return <div>PostDetails {id} </div>;
};

export default PostDetails;
