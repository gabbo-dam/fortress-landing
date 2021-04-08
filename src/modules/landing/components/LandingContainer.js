import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "./Landing";
import { noop } from "../../../utils";
import * as landingActions from "../redux/actions";
let interval = null;

class LandingContainer extends Component {
  componentDidMount() {
    const { getTokenData } = this.props;
    interval = setInterval(function () {
      getTokenData();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return <Landing />;
  }
}

LandingContainer.propTypes = {
  getTokenData: PropTypes.func,
  tokenData: PropTypes.instanceOf(Object),
};

LandingContainer.defaultProps = {
  getTokenData: noop,
  tokenData: {},
};

const mapStateToProps = (state) => ({
  tokenData: state.landing.tokenData,
});

const mapDispatchToProps = (dispatch) => ({
  getTokenData: () => dispatch(landingActions.getTokenData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
