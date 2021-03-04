import React from 'react';
import PropTypes from 'prop-types';

import MainTemplate from './MainTemplate';

const MainTemplateContainer = ({
  children, className, childrenContainerClassName,
  hideHeader, hideFooter,
}) => (
  <MainTemplate
    className={className}
    childrenContainerClassName={childrenContainerClassName}
    hideHeader={hideHeader}
    hideFooter={hideFooter}
  >
    {children}
  </MainTemplate>
);

MainTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  childrenContainerClassName: PropTypes.string,
  hideFooter: false,  
};

MainTemplateContainer.defaultProps = {
  children: <div />,
  className: '',
  childrenContainerClassName: '',
  hideFooter: false,
};

export default MainTemplateContainer;
