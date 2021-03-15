import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import AppHeader from '../../components/AppHeader/AppHeaderContainer';
import AppFooter from '../../components/AppFooter/AppFooter';

const MainTemplate = ({
  children, className, childrenContainerClassName,
  hideHeader, hideFooter, theme
}) => (
  <div className={` main-template ${theme}`}>
    {
      !hideHeader && (
        <AppHeader />
      )
    }
    <div className="main-content">
      <main className={className}>
        <div className={`children-container ${childrenContainerClassName}`}>
          {children}
        </div>
      </main>
    </div>
    {
      !hideFooter && (
        <AppFooter />
      )
    }
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  childrenContainerClassName: PropTypes.string,
  hideFooter: false,
};

MainTemplate.defaultProps = {
  children: <div />,
  className: '',
  childrenContainerClassName: '',
  hideFooter: false,
};


const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

export default connect(mapStateToProps)(MainTemplate);
