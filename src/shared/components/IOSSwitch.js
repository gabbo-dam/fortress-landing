import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 45,
    height: 28,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: '6px 0 0 3px',
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#F7C408',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#F7C408',
      border: '6px solid #fff',
    },
    height: '22px !important',
    backgroundColor: 'unset !important',
    color: 'dimgrey !important',
  },
  // buttonBase: {
  //   height: '26px !important'
  // },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid 353535`,
    backgroundColor: '#353535',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default IOSSwitch;
