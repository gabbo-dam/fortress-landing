import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Routes from './Routes';
import CQTheme from './assets/mui/CQ';
import './assets/styles/app.scss';

function App() {
  return (
    <MuiThemeProvider theme={CQTheme}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
