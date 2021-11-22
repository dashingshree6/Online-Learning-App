import React from "react";
import { Grid } from "semantic-ui-react";
import SPanel1 from "../spanel1";
import SMessage1 from "./sMessage1";
import SMessage2 from "./sMessage2";
import SNavigationBar from "../snavigationbar";

export default function SMessage() {
  return (
    <div className="teacher">
      <SNavigationBar />

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SPanel1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <SMessage1 />
          </Grid.Column>
          <Grid.Column>
            <SMessage2 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
