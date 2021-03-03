import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TwoColumn from './components/TwoColumn';

const TwoColumnSection = ({
  className, leftSection, rightSection, showInReverseOrder, widthRatio,
}) => (
  <div className={classNames('two-column-section-container', className)}>
    <div className="container">
      <div className={classNames('two-column-section', { reverse: showInReverseOrder })}>
        <section key="left" className="left-section" style={{ flex: widthRatio.split(':')[0] }}>
          <TwoColumn components={leftSection} />
        </section>
        <section key="right" className="right-section" style={{ flex: widthRatio.split(':')[1] }}>
          <TwoColumn components={rightSection} />
        </section>
      </div>
    </div>
  </div>
);

TwoColumnSection.propTypes = {
  className: PropTypes.string,
  leftSection: PropTypes.instanceOf(Object),
  rightSection: PropTypes.instanceOf(Object),
  showInReverseOrder: PropTypes.bool,
  widthRatio: PropTypes.string,
};

TwoColumnSection.defaultProps = {
  className: '',
  leftSection: {},
  rightSection: {},
  showInReverseOrder: false,
  widthRatio: '1:1',
};

export default TwoColumnSection;
