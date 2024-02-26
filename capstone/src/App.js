import './App.css';
import React, { Fragment } from 'react';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Fragment>
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;