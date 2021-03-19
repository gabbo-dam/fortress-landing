import React, { Component } from 'react';

import EarnInterest from './EarnInterest';
import api from '../../../../utils/api';
import { showErrorNotification } from '../../../../utils/helper';

class EarnInterestContainer extends Component {
  state = {
    tokenData: [],
    newTokenData: [],
    viewMoreToggle: false,
    withFTS: true,
  }

  componentDidMount() {
    const init = async (email, password, keepLogin) => {
      return await api.get('/fortress').then(res => {
        this.setState({
          tokenData: (res.data && res.data.data && res.data.data.markets) || [],
          newTokenData: (res.data && res.data.data && res.data.data.markets).slice(0, 6) || []
        });
      });
    }
    init();
  }

  handleState = (state, callBack) => {
    this.setState(state, () => {
      if (callBack) {
        callBack();
      }
    });
  }

  onViewMoreClick = () => {
    this.setState(prevState => ({
      viewMoreToggle: !prevState.viewMoreToggle,
    }), () => {
      const newTokenDataArray = this.state.tokenData.slice(0, this.state.viewMoreToggle ? this.state.tokenData.length : 6);
      this.setState({ newTokenData: newTokenDataArray });
    });
  }

  onWithFTSChange = () => {
    this.setState(prevState => ({
      withFTS: !prevState.withFTS,
    }));
  }

  render() {
    return (
      <EarnInterest
        newTokenData={this.state.newTokenData}
        viewMoreToggle={this.state.viewMoreToggle}
        handleState={this.handleState}
        onViewMoreClick={this.onViewMoreClick}
        withFTS={this.state.withFTS}
        onWithFTSChange={this.onWithFTSChange}
      />
    );
  }
  
};

export default EarnInterestContainer;
