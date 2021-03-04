import React, { Component } from 'react';

import MainTemplate from '../../shared/templates/MainTemplate/MainTemplateContainer';
import { LandingContainer } from '../../modules/landing';

class Landing extends Component {
  render() {
    return (
      <MainTemplate hideHeader>
        <LandingContainer />
      </MainTemplate>
    );
  }
}

export default Landing;
