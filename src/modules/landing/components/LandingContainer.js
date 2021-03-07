import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landing from './Landing';
import { noop } from '../../../utils';
import * as landingActions from '../redux/actions';
class LandingContainer extends Component {
  componentDidMount() {
    this.props.getTokenData();
  }
  
  render() {
    return (
      <Landing />
    );
  }
}

LandingContainer.propTypes = {
  getTokenData: PropTypes.func,
  tokenData: PropTypes.instanceOf(Object),
};

LandingContainer.defaultProps = {
  getTokenData: noop,
  tokenData: {}
};

const mapStateToProps = state => ({
  tokenData: state.landing.tokenData,
});

const mapDispatchToProps = dispatch => ({
  getTokenData: jobId => dispatch(landingActions.getTokenData(jobId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
