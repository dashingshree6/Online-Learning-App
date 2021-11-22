import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SPanel1() {
  return (
    <div className="panel1">
      <Menu vertical>
        <Menu.Item header>Menu</Menu.Item>
        <Menu.Item as={Link} to="/student">
          My Class
        </Menu.Item>
        <Menu.Item as={Link} to="/sMessage">
          Message
        </Menu.Item>
        <Menu.Item as={Link} to='/sAssignment'>Download Assignment</Menu.Item>
        <Menu.Item as={Link} to='/sQuiz'>Download Quiz</Menu.Item>
      </Menu>
    </div>
  );
}
