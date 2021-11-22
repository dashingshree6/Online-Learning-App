import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "./panel1";
import TeacherProfile from "./teacherprofile";
import Panel2 from "./panel2";
import Panel3 from "./panel3";

export default function Teacher() {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <Panel2 />
          </Grid.Column>
          <Grid.Column>
            <Panel3 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
