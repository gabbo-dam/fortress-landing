import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MarketInfo from './MarketInfo';

class MarketInfoConatainer extends Component {
  state = {
    tokenData: [],
    selectedToken: 'USDC',
    selectedTokenDetails: {},
  }

  componentDidMount() {
    this.setState({
      tokenData: (this.props.tokenData.markets) || [],
    }, () => this.setSelectedTokenDetails());
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.tokenData) !== JSON.stringify(nextProps.tokenData)) {
      this.setState({
        tokenData: (nextProps.tokenData.markets) || [],
      }, () => this.setSelectedTokenDetails());
    }
  }

  handleState = (state, callBack) => {
    this.setState(state, () => {
      if (callBack) {
        callBack();
      }
    });
  }

  hanldeSelectedToken = (e) => {
    this.setState({ selectedToken: e.target.value }, () => {
      this.setSelectedTokenDetails();
    });
  }

  setSelectedTokenDetails = () => {
    const selectedTokenDetails = this.state.tokenData.find(token => token.underlyingSymbol === this.state.selectedToken);
    this.setState({ selectedTokenDetails });
  }
  
  render() {
    return (
      <MarketInfo
        tokenData={this.state.tokenData}
        selectedToken={this.state.selectedToken}
        hanldeSelectedToken={this.hanldeSelectedToken}
        selectedTokenDetails={this.state.selectedTokenDetails}
      />
    )
  }
}

MarketInfoConatainer.propTypes = {
  tokenData: PropTypes.instanceOf(Object),
};

MarketInfoConatainer.defaultProps = {
  tokenData: {}
};

const mapStateToProps = state => ({
  tokenData: state.landing.tokenData,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketInfoConatainer);
