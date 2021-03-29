import React from 'react';
import {Container,Divider,Grid,Header,Image,Visibility,List,Segment} from 'semantic-ui-react';
import {Link, NavLink, Route } from 'react-router-dom';


function Footer(props) {
  return (
    <div>
      <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={2} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as={Link} to="/">Home</List.Item>
                    <List.Item as={Link} to="/movies">Movies</List.Item>
                    <List.Item as={Link} to="/movies/new">Add Movie</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Movie INC' />
                  <p>
                    ADDRESS: 123 Main street NY Brooklyn
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
              <p>&copy;{new Date().getFullYear()} MOVIEApp INC | All rights reserved | Terms Of Service | Privacy.</p>
            </List>
          </Container>
        </Segment>
    </div>
  )
}


export default Footer

