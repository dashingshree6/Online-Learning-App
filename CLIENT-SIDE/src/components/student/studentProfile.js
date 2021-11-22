import React from "react";
import { Grid, Image, Label, Segment, Table } from "semantic-ui-react";
import SNavigationBar from "./snavigationbar";

export default function StudentProfile() {
  return (
    <div>
      <SNavigationBar />
      <Grid>
        <Grid.Column width={4}>
          <Image src="data:image/jpeg;base64,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" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Overview
            </Label>
            <span>Account Details</span>

            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name :</Table.HeaderCell>
                  <Table.HeaderCell>Erica Johnson</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Email-Id :</Table.HeaderCell>
                  <Table.HeaderCell>erica.johnson@gmail.com</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>User-Id :</Table.HeaderCell>
                  <Table.HeaderCell>erica.johnson</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Phone No :</Table.HeaderCell>
                  <Table.HeaderCell>+1 6555 123 3456</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Gender :</Table.HeaderCell>
                  <Table.HeaderCell>Female</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Address :</Table.HeaderCell>
                  <Table.HeaderCell>
                    21 Freedom Street, Atlanta, GA, USA
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Country :</Table.HeaderCell>
                  <Table.HeaderCell>United States of America</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
            <Label as="a" color="blue" ribbon>
              Class :
            </Label>
            <br />
            <br />

            <i>3</i>
            <br />
            <br />
            <Label as="a" color="orange" ribbon>
              Division :
            </Label>
            <br />
            <br />

            <i>B</i>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
