import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BorrowOnDemand from './BorrowOnDemand';

class BorrowOnDemandContainer extends Component {
  state = {
    tokenData: [],
    newTokenData: [],
    viewMoreToggle: false,
    withFAI: true,
  }

  componentDidMount() {
    this.setState({
      tokenData: (this.props.tokenData.markets) || [],
      newTokenData: (this.props.tokenData.markets && this.props.tokenData.markets.slice(0, 6)) || []
    });
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.tokenData) !== JSON.stringify(nextProps.tokenData)) {
      this.setState({
        tokenData: (nextProps.tokenData.markets) || [],
        newTokenData: (nextProps.tokenData.markets).slice(0, 6) || []
      });
    }
  }
  
  onViewMoreClick = () => {
    this.setState(prevState => ({
      viewMoreToggle: !prevState.viewMoreToggle,
    }), () => {
      const newTokenDataArray = this.state.tokenData.slice(0, this.state.viewMoreToggle ? this.state.tokenData.length : 6);
      this.setState({ newTokenData: newTokenDataArray });
    });
  }
  
  render() {
    return(
      <BorrowOnDemand
        newTokenData={this.state.newTokenData}
        viewMoreToggle={this.state.viewMoreToggle}
        onViewMoreClick={this.onViewMoreClick}
      />
    );
  }
};

BorrowOnDemandContainer.propTypes = {
  tokenData: PropTypes.instanceOf(Object),
};

BorrowOnDemandContainer.defaultProps = {
  tokenData: {}
};

const mapStateToProps = state => ({
  tokenData: state.landing.tokenData,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BorrowOnDemandContainer);
