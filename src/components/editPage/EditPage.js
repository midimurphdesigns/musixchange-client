import React, { PureComponent } from 'react';

import { PostsServices } from '../../services/api';
import EditForm from '../editform/EditForm';

class EditPage extends PureComponent {
  state = { post: null, loading: false };

  componentDidMount() {
    this._fetchInfo();
  }

  redirectToFrontpage = () => {
    this.props.history.push('/');
  };

  _fetchInfo = () => {
    this.setState({ loading: true });
    const { id } = this.props.match.params;

    PostsServices.getPost(id).then(post => this.setState({ post, loading: false }));
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    return <EditForm redirect={this.redirectToFrontpage} post={this.state.post} />;
  }
}

export default EditPage;
