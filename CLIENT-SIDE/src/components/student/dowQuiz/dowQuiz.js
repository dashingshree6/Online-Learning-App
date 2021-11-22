import React from "react";
import { Grid } from "semantic-ui-react";
import SPanel1 from "../spanel1";
import SQuiz1 from "./sQuiz1";
import SNavigationBar from "../snavigationbar";

export default function DowQuiz() {
  return (
    <div className="teacher">
      <SNavigationBar />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <SPanel1 />
          </Grid.Column>
          <Grid.Column width={10}>
            <SQuiz1 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
