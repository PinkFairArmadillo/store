import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Login from './Login.jsx';
import Checkout from './containers/Checkout.jsx'
import store from './store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#699E98',
      main: '#236A62',
      dark: '#00352F',
      contrastText: "#F4F4F4",
    },
    secondary: {
      light: "#9bc495",
      main: "#779e71",
      dark: "#43603e",
      contrastText: "#F4F4F4",
    },
    error: {
      light: "#FFA9A9",
      main: "#AB3838",
      dark: "#560000",
      contrastText: "#F4F4F4",
    },
  },
});

const Index = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => (<App />)}/>
          <Route path='/login' render={() => (<Login/>)} />
          <Route path='/cart' render={() => (<Checkout/>)} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);

