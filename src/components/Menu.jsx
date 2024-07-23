import React from "react";
import { Link } from "react-router-dom";
import { Menubar, MenubarMenu, MenubarTrigger } from "../components/ui/menubar";
import {
  NavigationMenuLink,
} from "../components/ui/navigation-menu";

const Menu = () => {
  return (
    <div style={styles.container}>
      <Menubar style={styles.menubar}>
        <MenubarMenu key="home">
          <MenubarTrigger>
            <Link to="/" style={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu key="about">
          <MenubarTrigger>
            <Link to="/about" style={navigationMenuTriggerStyle()}>
              About
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu key="skills">
          <MenubarTrigger>
            <Link to="/skills" style={navigationMenuTriggerStyle()}>
              Skills
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu key="projects">
          <MenubarTrigger>
            <Link to="/projects" style={navigationMenuTriggerStyle()}>
              Projects
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu key="education">
          <MenubarTrigger>
            <Link to="/education" style={navigationMenuTriggerStyle()}>
              Education
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu key="contact">
          <MenubarTrigger>
            <Link to="/contact" style={navigationMenuTriggerStyle()}>
              Contact
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    marginTop: "10px",
    alignItems: "center",
    background: "transparent", // Ensure the container background is transparent
  },

  menubar: {
    background: "transparent", // Ensure the Menubar background is transparent
  },
};

const navigationMenuTriggerStyle = () => {
  return {
    textDecoration: 'none',
    color: 'inherit',
    background: 'transparent', // Ensure the background is transparent
    border: 'none', // Remove any border if applied
  };
};

export default Menu;
