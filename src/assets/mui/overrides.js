import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// import variables from '../styles/app.sass';

// const defaultTheme = createMuiTheme();

const overrides = {
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiButtonBase: {
      root: {
        backgroundColor: '#F7C408 !important',
        color: '#000 !important',
        fontWeight: 'bold !important',
        height: '50px',
        minWidth: '180px !important',
        fontSize: '16px !important'
      }
    },
    MuiIconButton: {
      root: {
        height: '40px',
        minWidth: 'unset !important'
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
        height: '200px'
      }
    },
    // MuiPaper: {
    //   root: {
    //     top: '357px !important'
    //   }
    // }
  },
};

export default overrides;
