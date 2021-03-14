import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MovieList from '../MovieList'


export class MoviesPage extends Component {
  static propTypes={movies:PropTypes.array.isRequired}
  render() {
    console.log(this.props)
    return (
      <div>
        <MovieList movies={this.props.movies}/>
      </div>
    )
  }
}

const mapStateToProps = ({moviesReducer}) => ({movies:moviesReducer})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
