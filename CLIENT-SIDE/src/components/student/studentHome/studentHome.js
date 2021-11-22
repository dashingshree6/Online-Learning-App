import React from "react";
import { Grid } from "semantic-ui-react";
import SPanel1 from "../spanel1";
import SNavigationBar from "../snavigationbar";
import SHome1 from "./sHome1";

export default function SHome() {
  return (
    <div>
      <SNavigationBar />
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SPanel1 />
          </Grid.Column>
          <Grid.Column width={8}>
            <SHome1 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
