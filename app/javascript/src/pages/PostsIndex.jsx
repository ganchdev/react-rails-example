import React  from "react";
import PropTypes from "prop-types";
import { post_path } from "../../routes";

import Card from "../components/Card";

/**
 * @param {String} posts
 * @return {JSX.Element}
 */
function PostsIndex({ posts }) {
  return (
    <div className="grid grid-flow-row-dense gap-10 grid-cols-3 grid-rows-3">
      {JSON.parse(posts).map((post, index) => {
        return(
          <div key={index}>
            <Card title={post.title} body={post.content} url={post_path(post.id)} />
          </div>
        );
      })}
    </div>
  );
}

PostsIndex.propTypes = {
  posts: PropTypes.string
}

export default PostsIndex;
