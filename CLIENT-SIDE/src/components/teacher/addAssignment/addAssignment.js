import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "../panel1";
import TAssignment1 from "./tAssignment1";
import TAssignment2 from "./tAssignment2";
import NavigationBar from "../navigationbar";

export default function AddAssignment() {
  return (
    <div className="teacher">
      <NavigationBar />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <TAssignment1 />
          </Grid.Column>
          <Grid.Column>
            <br />
            <TAssignment2 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
