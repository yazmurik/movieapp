import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Image, Form } from 'semantic-ui-react'


export default class NewMoviePage extends Component {
  state={
    title:'',
    cover:'',
    errors:{}
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form>
    <Form.Field>
      <label>Title</label>
      <input id='title' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Cover Img Url</label>
      <input id='cover' name='cover' value={this.state.cover} onChange={this.handleChange} placeholder='Cover Img Url' />
    </Form.Field>
    <Form.Field>
    <Image src={this.state.cover} size='small' />
    </Form.Field>
    <Button color='blue' type='submit'>Submit</Button>
  </Form>
      </div>
    )
  }
}
