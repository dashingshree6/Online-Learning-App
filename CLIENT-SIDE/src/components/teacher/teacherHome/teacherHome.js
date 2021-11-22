import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "../panel1";
import NavigationBar from "../navigationbar";
import THome1 from "./tHome1";

export default function THome() {
  return (
    <div>
      <NavigationBar />
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={8}>
            <THome1 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
