import React from 'react';
import './posts.css';
import { PostsServices } from '../../services/api';

export default class Posts extends React.Component {

  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    PostsServices.getPosts()
      .then(res => {
        console.log(res)
        this.setState({ posts: res })
      })
      .catch(err => {
        console.log('====================================');
        console.log('error', err);
        console.log('====================================');
      });
  };

  render() {
    console.log(this.state.posts);
    return (
      <div className="section-container">
        <h1 className="page-title">Gear for Sale</h1>
        {this.state.posts.map((element, index) => {
          return (
            <div className="posts-container row" key={String(index)}>
              <div className="instrument-details">
                <div className="pic-info col-4">
                  <img
                    src={element.image}
                    alt="instrument for sale"
                    className="post-image"
                  />
                </div>
                <div className="instrument-about col-4">
                  <label className="info-label">Title:</label>
                  <label className="instrument-label">{element.title}</label>
                  <label className="info-label">Description:</label>
                  <label className="instrument-label">{element.description}</label>
                  <label className="info-label">Condition:</label>
                  <label className="instrument-label">{element.condition}</label>
                </div>
                <div className="instrument-about col-4">
                  <label className="info-label">Price:</label>
                  <label className="user-info">{element.price}</label>
                  <label className="info-label">Seller:</label>
                  <label className="user-info">{element.author.username}</label>
                  <label className="info-label">Email:</label>
                  <label className="user-info">{element.author.email}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
