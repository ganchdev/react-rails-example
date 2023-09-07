import React, from "react";
import PropTypes from "prop-types";

/**
 * @param {String} post json
 * @return {JSX.Element}
 */
function PostsShow({ post }) {
  const parsedPost = JSON.parse(post);

  return(
    <div className="prose">
      <h1>{parsedPost.title}</h1>
      <p>{parsedPost.content}</p>
    </div>
  );
}

PostsShow.propTypes = {
  post: PropTypes.string
}

export default PostsShow;