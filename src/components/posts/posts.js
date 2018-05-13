import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import './posts.css';
import PostItem from './PostItem';

import { fetchPosts } from '../../actions/postActions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { loading, error, posts } = this.props.postsState;
    if (loading) {
      return (
        <div className="loading-wrapper">
          <RiseLoader />
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <h1>something wrong: {error.message}</h1>
        </div>
      );
    }
    return (
      <div className="section-container">
        <h1 className="page-title">Gear for Sale</h1>
        {posts.map(element => (
          <PostItem {...element} key={String(element.id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postsState: state.post,
});

export default connect(mapStateToProps)(Posts);
