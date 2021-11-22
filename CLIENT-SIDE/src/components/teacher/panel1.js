import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Panel1() {
  return (
    <div className="panel1">
      <Menu vertical>
        <Menu.Item header>Menu</Menu.Item>
        <Menu.Item as={Link} to="/">
          My Class
        </Menu.Item>
        <Menu.Item as={Link} to="/tMessage">
          Message
        </Menu.Item>
        <Menu.Item as={Link} to="/tAssignment">
          Add Assignment
        </Menu.Item>
        <Menu.Item as={Link} to="/tQuiz">
          Add Quiz
        </Menu.Item>
      </Menu>
    </div>
  );
}
