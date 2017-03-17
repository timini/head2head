import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import { Users } from './modules';

const App =  () => {
  return (
    <MuiThemeProvider>
      <Users />
    </MuiThemeProvider>
  );
}
export default App;
