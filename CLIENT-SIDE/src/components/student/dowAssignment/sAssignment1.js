import React from "react";
import { Button, Card, Image, Header, Message } from "semantic-ui-react";

export default function SQuiz1() {
  return (
    <div>
      <Header as="h2">
        <Image
          circular
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ-Q8Y1NCmDz42HwLrD2-K75uwiHc-XDsaA&usqp=CAU"
        />{" "}
        History
      </Header>
      <hr />
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>History</Card.Meta>
            <Card.Description>French Revolution</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>History</Card.Meta>
            <Card.Description>Indian History</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>History</Card.Meta>
            <Card.Description>Medieval Period</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>
      </Card.Group>

      <hr />
      <Header as="h2">
        <Image
          circular
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ-Q8Y1NCmDz42HwLrD2-K75uwiHc-XDsaA&usqp=CAU"
        />{" "}
        Science
      </Header>
      <hr />
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Science</Card.Meta>
            <Card.Description>All about environment</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Science</Card.Meta>
            <Card.Description>States of Matter</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Science</Card.Meta>
            <Card.Description>Reproduction in plants</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>
      </Card.Group>

      <hr />
      <Header as="h2">
        <Image
          circular
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ-Q8Y1NCmDz42HwLrD2-K75uwiHc-XDsaA&usqp=CAU"
        />{" "}
        Mathematics
      </Header>
      <hr />
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Mathematics</Card.Meta>
            <Card.Description>Algebraic Expressions</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Mathematics</Card.Meta>
            <Card.Description>Trigonometric Functions</Card.Description>
          </Card.Content>
          <Button color="blue">Download Assignment</Button>
        </Card>
      </Card.Group>
    </div>
  );
}
