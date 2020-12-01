import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1B1B1B',
    },
    primary: {
      main: '#f50057',
    },
    text: {
      primary: '#ffffff',
      secondary: '#5B5B5B',
    },
  },
  typography: {
    fontFamily: ['Inconsolata', 'cursive'].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1.25rem',
        textTransform: 'none',
        backgroundColor: 'transparent',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: 'transparent',
      },
    },
  },
});
