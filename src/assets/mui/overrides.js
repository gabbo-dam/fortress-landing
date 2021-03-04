import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// import variables from '../styles/app.sass';

// const defaultTheme = createMuiTheme();

const overrides = {
  typography: {
    fontFamily: 'Poppins',
  },
  // props: {
  //   MuiButton: {
  //     focusRipple: false,
  //   },
  //   MuiToggleButton: {
  //     focusRipple: false,
  //   },
  //   MuiIconButton: {
  //     focusRipple: false,
  //   },
  //   MuiTab: {
  //     focusRipple: false,
  //   },
  //   MuiRadio: {
  //     focusRipple: false,
  //   },
  //   MuiCheckbox: {
  //     focusRipple: false,
  //   },
  // },
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
      // focusVisible: {
      //   outline: `auto 5px ${variables.outline}`,
      // },
    },
    MuiIconButton: {
      root: {
        height: '40px',
        minWidth: 'unset !important'
      }
    }
    // MuiFormLabel: {
    //   root: {
    //     color: `${variables.textColor800} !important`,
    //     fontSize: 18,
    //     transform: 'translate(0, 1.5px) scale(0.75) !important',
    //     transformOrigin: 'top left !important',
    //   },
    //   error: {
    //     color: `${variables.errorColor} !important`,
    //   },
    // },
    // MuiInput: {
    //   root: {
    //     padding: 0,
    //     'label + &': {
    //       marginTop: `${defaultTheme.spacing.unit * 3}px !important`,
    //     },
    //     'label + & ::-webkit-input-placeholder': {
    //       opacity: '0.5 !important',
    //     },
    //   },
    //   input: {
    //     borderRadius: 4,
    //     backgroundColor: defaultTheme.palette.common.white,
    //     border: `1px solid ${variables.borderColor400}`,
    //     fontSize: 16,
    //     padding: '10px 12px !important',
    //     width: 'calc(100% - 24px)',
    //     transition: defaultTheme.transitions.create(['border-color', 'box-shadow']),
    //     fontFamily: [
    //       variables.contentFontFamily,
    //       '-apple-system',
    //       'BlinkMacSystemFont',
    //       '"Segoe UI"',
    //       'Roboto',
    //       '"Helvetica Neue"',
    //       'Arial',
    //       'sans-serif',
    //       '"Apple Color Emoji"',
    //       '"Segoe UI Emoji"',
    //       '"Segoe UI Symbol"',
    //     ].join(','),
    //     '&:focus': {
    //       outline: 0,
    //     },
    //     '&:hover &:before': {
    //       borderBottom: 'none !important',
    //     },
    //     '&::placeholder': {
    //       textOverflow: 'ellipsis !important',
    //     },
    //   },
    //   error: {
    //     '& input': {
    //       border: `1px solid ${variables.errorColor}`,
    //       '&:focus': {
    //         borderColor: `${variables.errorColor}`,
    //       },
    //     },
    //   },
    //   underline: {
    //     '&:before': {
    //       borderBottom: 'none !important',
    //     },
    //     '&:after': {
    //       borderBottom: 'none',
    //     },
    //   },
    // },
    // MuiToggleButtonGroup: {
    //   root: {
    //     backgroundColor: 'transparent !important',
    //     boxShadow: 'none !important',
    //   },
    // },
    // MuiToggleButton: {
    //   root: {
    //     height: 'auto',
    //     minHeight: 0,
    //     marginRight: 4,
    //     minWidth: 0,
    //     border: `1px solid ${variables.borderColor400}`,
    //     borderRadius: '10px !important',
    //     '&:hover': {
    //       backgroundColor: `${variables.backgroundColor200} !important`,
    //     },
    //   },
    //   selected: {
    //     color: '#fff !important',
    //     backgroundColor: `${variables.backgroundColor800} !important`,
    //     '&:after': {
    //       display: 'none',
    //     },
    //     '&:hover': {
    //       backgroundColor: `${variables.backgroundColor800} !important`,
    //     },
    //   },
    // },

    // MuiCheckbox: {
    //   root: {
    //     color: `${variables.textColor800} !important`,
    //   },
    //   disabled: {
    //     color: `${variables.textColor400} !important`,
    //   },
    // },
  },
};

export default overrides;
