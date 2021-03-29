import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "../MovieList";
import { fetchMovies,onDeleteMovieSubmit } from "../../actions/movieActions";

import {HashLoader} from "react-spinners";

export class MoviesPage extends Component {
  static propTypes = {
    moviesReducer: PropTypes.shape({ movies: PropTypes.array.isRequired }).isRequired
  };

  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const errMessage = this.props.moviesReducer.error.message;
    return (
      <div>
        <h2>Movie List</h2>
        <HashLoader margin={2} color={'#3BC2A7'} loading={this.props.moviesReducer.fetching}/>
        {errMessage ? (
          <h3>data error ({errMessage})</h3>
        ) : (
          <MovieList movies={this.props.moviesReducer.movies} deleteMovie={this.props.onDeleteMovieSubmit}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ moviesReducer }) => ({ moviesReducer });

const mapDispatchToProps = { fetchMovies, onDeleteMovieSubmit };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
