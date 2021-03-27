import './App.css';
import {Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage';
import Header from './components/Header';
import Footer from "./components/Footer";
import React, { Component } from 'react'
import {Container} from 'semantic-ui-react';
import NewMoviePage from "../src/components/pages/NewMoviePage"


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container text>
          <Route exact path="/movies" component={MoviesPage}></Route>
          <Route exact path="/movies/new" component={NewMoviePage}></Route>
          <Route exact path="/movie/:_id" component={NewMoviePage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default App;

