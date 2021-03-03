import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../components/AppHeader/AppHeaderContainer';

const MainTemplate = ({
  children, className, childrenContainerClassName,
}) => (
  <div className="main-template">
    <AppHeader />
    <div className="main-content">
      <main className={className}>
        <div className={`children-container ${childrenContainerClassName}`}>
          {children}
        </div>
      </main>
    </div>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  childrenContainerClassName: PropTypes.string,
};

MainTemplate.defaultProps = {
  children: <div />,
  className: '',
  childrenContainerClassName: '',
};

export default MainTemplate;
