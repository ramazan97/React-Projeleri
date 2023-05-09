import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { url, id } = useParams();
  return (
    <div>
      Post = {url}- {id}
    </div>
  );
};

export default Post;
