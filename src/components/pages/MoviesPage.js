import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "../MovieList";
import { fetchMovies } from "../../actions/movieActions";

export class MoviesPage extends Component {
  static propTypes = { moviesReducer: PropTypes.object.isRequired };
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <MovieList movies={this.props.moviesReducer.movies} />
      </div>
    );
  }
}

const mapStateToProps = ({ moviesReducer }) => ({ moviesReducer });

const mapDispatchToProps = {fetchMovies};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
