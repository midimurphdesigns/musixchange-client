import React, { PureComponent } from 'react';

import { AdsServices } from '../../services/api';
import EditForm from '../editform/EditForm';

class EditPage extends PureComponent {
  state = { ad: null, loading: false };

  componentDidMount() {
    this._fetchInfo();
  }

  redirectToFrontpage = () => {
    this.props.history.push('/');
  };

  _fetchInfo = () => {
    this.setState({ loading: true });
    const { id } = this.props.match.params;

    AdsServices.getAd(id).then(ad => this.setState({ ad, loading: false }));
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    return <EditForm redirect={this.redirectToFrontpage} ad={this.state.ad} />;
  }
}

export default EditPage;
