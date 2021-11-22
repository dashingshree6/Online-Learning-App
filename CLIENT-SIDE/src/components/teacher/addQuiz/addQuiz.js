import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "../panel1";
import TQuiz1 from "./tQuiz1";
import TQuiz2 from "./tQuiz2";
import NavigationBar from "../navigationbar";

export default function AddQuiz() {
  return (
    <div className="teacher">
      <NavigationBar />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={6}>
            <TQuiz1 />
          </Grid.Column>
          <Grid.Column>
            <br />
            <TQuiz2 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
