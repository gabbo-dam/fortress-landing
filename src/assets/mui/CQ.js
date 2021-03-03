import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import theme from './theme';
import overrides from './overrides';

const cqTheme = createMuiTheme(Object.assign(overrides, theme));

export default cqTheme;

