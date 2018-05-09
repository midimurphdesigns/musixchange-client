import React from 'react';

export default function PostItem({
  image,
  title,
  description,
  condition,
  price,
  author,
}) {
  return (
    <div className="posts-container row">
      <div className="instrument-details">
        <div className="pic-info col-4">
          <img src={image} alt="instrument for sale" className="post-image" />
        </div>
        <div className="instrument-about col-4">
          <label className="info-label">Title:</label>
          <label className="instrument-label">{title}</label>
          <label className="info-label">Description:</label>
          <label className="instrument-label">{description}</label>
          <label className="info-label">Condition:</label>
          <label className="instrument-label">{condition}</label>
        </div>
        <div className="instrument-about col-4">
          <label className="info-label">Price:</label>
          <label className="user-info">${price}</label>
          <label className="info-label">Seller:</label>
          <label className="user-info">{author.username}</label>
          <label className="info-label">Email:</label>
          <label className="user-info">{author.email}</label>
        </div>
      </div>
    </div>
  );
}
