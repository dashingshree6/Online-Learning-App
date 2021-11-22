import React from "react";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import SPanel1 from "./spanel1";
import SPanel2 from "./spanel2";

export default function Student() {
  return (
    <div className="teacher">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SPanel1 />
          </Grid.Column>
          <Grid.Column width={10}>
            <SPanel2 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
