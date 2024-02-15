import './App.css';
import React, { Fragment } from 'react';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';

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
