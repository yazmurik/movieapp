import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class NewMoviePage extends Component {
  state={
    title:'',
    cover:''
  }

  render() {
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Cover Img Url</label>
      <input placeholder='Cover Img Url' />
    </Form.Field>
    <Button color='blue' type='submit'>Submit</Button>
  </Form>
      </div>
    )
  }
}
