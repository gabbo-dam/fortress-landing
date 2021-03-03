import React from 'react';
import PropTypes from 'prop-types';

import TwoColumnSection from './TwoColumnSection';

const TwoColumnSectionContainer = ({
  className, leftSection, rightSection, showInReverseOrder, widthRatio,
}) => (
  <TwoColumnSection
    className={className}
    leftSection={leftSection}
    rightSection={rightSection}
    showInReverseOrder={showInReverseOrder}
    widthRatio={widthRatio}
  />
);

TwoColumnSectionContainer.propTypes = {
  className: PropTypes.string,
  leftSection: PropTypes.instanceOf(Object),
  rightSection: PropTypes.instanceOf(Object),
  showInReverseOrder: PropTypes.bool,
  widthRatio: PropTypes.string,
};

TwoColumnSectionContainer.defaultProps = {
  className: '',
  leftSection: {},
  rightSection: {},
  showInReverseOrder: false,
  widthRatio: '1:1',
};

export default TwoColumnSectionContainer;
