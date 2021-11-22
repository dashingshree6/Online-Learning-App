import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "../panel1";
import TMessage1 from "./tMessage1";
import TMessage2 from "./tMessage2";
import NavigationBar from "../navigationbar";

export default function TMessage() {
  return (
    <div className="teacher">
      <NavigationBar />

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <TMessage2 />
          </Grid.Column>
          <Grid.Column>
            <TMessage1 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
