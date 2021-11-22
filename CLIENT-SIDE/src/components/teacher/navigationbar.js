import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu pointing>
      <Menu.Item
        as={Link}
        to="/tHome"
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/profile"
        name="profile"
        active={activeItem === "profile"}
        onClick={handleItemClick}
      />

      <Menu.Item
        as={Link}
        to="/tdashboard"
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name="logout"
          active={activeItem === "logout"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}
