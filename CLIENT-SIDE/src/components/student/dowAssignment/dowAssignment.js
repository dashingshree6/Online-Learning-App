import React from "react";
import { Grid } from "semantic-ui-react";
import SPanel1 from "../spanel1";
import SAssignment1 from "./sAssignment1";
import SNavigationBar from "../snavigationbar";

export default function DowAssignment() {
  return (
    <div className="teacher">
      <SNavigationBar />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SPanel1 />
          </Grid.Column>
          <Grid.Column width={10}>
            <SAssignment1 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
