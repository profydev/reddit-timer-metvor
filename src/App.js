import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import Header from './Header';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  </ThemeProvider>
  );
}
