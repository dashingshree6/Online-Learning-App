import React from "react";
import { Segment } from "semantic-ui-react";
import { List } from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="footer">
      <List>
        <h3>ABOUT US</h3>
        <hr />
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Pune, Maharashtra, India </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>support@learningvirtulum.com</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="phone volume" />
          <List.Content>+91 6555 123 456</List.Content>
        </List.Item>
        <hr />
        <span>Copyright @ 2021 All rights Reserved by LearningVirtulum</span>
      </List>
    </div>
  );
}
