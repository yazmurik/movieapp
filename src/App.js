import './App.css';
import {Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage';
import Header from './components/Header';
import Footer from "./components/Footer";
import React, { Component } from 'react'
import {Container} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container text>
          App components
          <br />
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default App;

