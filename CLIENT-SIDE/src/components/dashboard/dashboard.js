import React from "react";
import { Grid, Divider } from "semantic-ui-react";
import Dashboard1 from "./dashboard1";
import Dashboard2 from "./dashboard2";
import Dashboard3 from "./dashboard3";

export default function Dashboard() {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Dashboard1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <Dashboard2 />
          </Grid.Column>
          <Grid.Column>
            <Dashboard3 />
          </Grid.Column>
          <Divider vertical />
        </Grid.Row>
      </Grid>
    </div>
  );
}
