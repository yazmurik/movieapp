import React from "react";
import { Label, Grid, Embed, Header } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
        <Grid centered columns={3}>
    <Grid.Column>
      <Header centered as='h2'>Bodyguard</Header>
    </Grid.Column>
    </Grid>
      
      <Label as="a" color="red" tag>
        Upcoming
      </Label>
      <Label as='a'>$10.00</Label>

      <br/>
      <Embed
        id="3Z2FxVT6LIE"
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
    </div>
  );
};

export default Home;
