import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';
const themeDark = createMuiTheme({
  palette: {
    background: {
      default: '#1B1B1B',
    },
    text: {
      primary: '#ffffff',
      secondary: '#5B5B5B',
    },
  },
  typography: {
    fontFamily: ['Inconsolata', 'cursive'].join(','),
  },
});
ReactDOM.render(
  <MuiThemeProvider theme={themeDark}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
