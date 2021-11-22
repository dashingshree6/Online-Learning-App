import React from "react";
import { Button, Card, Image, Header, Message } from "semantic-ui-react";

export default function SHome1() {
  return (
    <div>
      <Header as="h2">
        <Image
          circular
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ-Q8Y1NCmDz42HwLrD2-K75uwiHc-XDsaA&usqp=CAU"
        />{" "}
        English
      </Header>
      <hr />
      <Message negative>
        <Message.Header>No classes scheduled today</Message.Header>
      </Message>
      <hr />
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
            <Card.Description>8:00 AM - 9:00 AM</Card.Description>
            <Card.Description>French Revolution</Card.Description>
          </Card.Content>
          <Button color="red">Join Class</Button>
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
            <Card.Description>9:00 AM - 10:00 AM</Card.Description>
            <Card.Description>All about environment</Card.Description>
          </Card.Content>
          <Button color="red">Join Class</Button>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Class 3-B</Card.Header>
            <Card.Meta>Science</Card.Meta>
            <Card.Description>2:00 PM - 3:00 PM</Card.Description>
            <Card.Description>States of Matter</Card.Description>
          </Card.Content>
          <Button color="red">Join Class</Button>
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
            <Card.Description>10:00 AM - 11:00 AM</Card.Description>
            <Card.Description>Algebraic Expressions</Card.Description>
          </Card.Content>
          <Button color="red">Join Class</Button>
        </Card>
      </Card.Group>
    </div>
  );
}
