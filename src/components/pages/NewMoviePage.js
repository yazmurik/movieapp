import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, Form, Message } from "semantic-ui-react";
import InlineError from "../InlineError";
import { onNewMovieSubmit, fetchMovie,onUpdateMoviesSubmit } from "../../actions/newMovieActions";
import { Redirect } from "react-router-dom";
import newMovieReducer from "../../reducers/newMovieReducer";

class NewMoviePage extends Component {
  
  componentDidMount() {
    const {willUpdateMovie, match}=this.props;
    if(!willUpdateMovie && match.params._id){
      this.props.fetchMovie(match.params._id);
    }
  }
 
  componentWillReceiveProps(nextProps) {
    const {newMovieReducer}=nextProps;
    if(newMovieReducer.movies.data){
      this.setState({
        title: newMovieReducer.movies.data.title,
        cover: newMovieReducer.movies.data.cover
    })
 }}
  
  
  state = {
    title: this.props.willUpdateMovie ? this.props.willUpdateMovie.title : "",
    cover: this.props.willUpdateMovie ? this.props.willUpdateMovie.cover : "",
    errors: {},
    redirect: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
     const id = this.props.match.params._id;
     if(!id){
       this.props.onNewMovieSubmit(this.state)
     }else{
       console.log(id, "else")
      this.props.onUpdateMoviesSubmit({...this.state, id})
     }
      this.setState({ redirect: true });
    }
  };

  validate = () => {
    const errMessage = {};
    if (!this.state.title) errMessage.title = "Can't be null(Title)";
    if (!this.state.cover) errMessage.cover = "Can't be null (Cover)";
    return errMessage;
  };

  render() {
    const { errors } = this.state;

    const errorField = (
      <Message negative>
        <Message.Header>Error: </Message.Header>
        <p>To upload this movie</p>
      </Message>
    );

    const movieForm = (
      <Form
        onSubmit={this.onSubmit}
        loading={this.props.newMovieReducer.fethcing}
      >
        <Form.Field error={!!errors.title}>
          <label>Title</label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          {errors.title && <InlineError message={errors.title} />}
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover Img Url</label>
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder="Cover Img Url"
          />
          {errors.cover && <InlineError message={errors.cover} />}
        </Form.Field>
        <Form.Field>
          <Image src={this.state.cover} size="small" />
        </Form.Field>
        <Button color="blue" type="submit">
          Submit
        </Button>
        {this.props.newMovieReducer.error.response && errorField}
      </Form>
    );
    return (
      <div>
        <h2>New Movie Form</h2>
        {this.props.newMovieReducer.fetched && this.state.redirect ? (
          <Redirect to="/movies" />
        ) : (
          movieForm
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ newMovieReducer, moviesReducer },props) => {
  return {
    newMovieReducer,
    willUpdateMovie: moviesReducer.movies.find(
      (item) => item.id === props.match.params._id
    ),
  };
};

const mapDispatchToProps = {
  onNewMovieSubmit, fetchMovie,onUpdateMoviesSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
