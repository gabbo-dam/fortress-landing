import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { setDocHeight } from './services/utilsService';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pluses from './components/Pluses/Pluses';

import './App.scss';
import './common/tooltip.scss';
import './common/table.scss';
import './common/box.scss';

const App = ({ store }) => {
  useEffect(() => {
    setDocHeight();
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Hero />
        <Pluses />
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
