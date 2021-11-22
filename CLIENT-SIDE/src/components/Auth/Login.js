import React, { useState } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  return (
    <div>
      <Grid centered verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="blue" textAlign="center">
            <Button.Group>
              <Button as={Link} to="/login" size="massive" primary>
                Teacher
              </Button>
              <Button.Or text="OR" />
              <Button as={Link} to="/slogin" size="massive" positive>
                Student
              </Button>
            </Button.Group>
            <Icon name="paper plane" color="blue" /> Login
          </Header>
          <Form size="large" textAlign="left">
            <Segment>
              <Form.Field>
                <label>Email-Id</label>
                <input
                  name="email"
                  placeholder="Type your email-id"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                />
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  placeholder="Type your email-id"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                />
              </Form.Field>

              <Button as={Link} to="/tHome" color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New user? <Link to="/register">Sign-Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
