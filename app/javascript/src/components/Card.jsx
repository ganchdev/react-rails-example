import React from "react";
import PropTypes from "prop-types";

/**
 * @param {String} title
 * @param {String} body
 * @param {String} url
 * @return {JSX.Element}
 */
function Card({ title, body, url }) {
  return(
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <a href={url} className="btn">Read now</a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.url
}

export default Card;
