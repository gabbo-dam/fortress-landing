import React from 'react';
import PropTypes from 'prop-types';

import MainTemplate from './MainTemplate';

const MainTemplateContainer = ({
  children, className, childrenContainerClassName,
}) => (
  <MainTemplate
    className={className}
    childrenContainerClassName={childrenContainerClassName}
  >
    {children}
  </MainTemplate>
);

MainTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  childrenContainerClassName: PropTypes.string,
};

MainTemplateContainer.defaultProps = {
  children: <div />,
  className: '',
  childrenContainerClassName: '',
};

export default MainTemplateContainer;
