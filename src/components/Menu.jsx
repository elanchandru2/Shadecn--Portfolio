import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menubar, MenubarMenu, MenubarTrigger } from "../components/ui/menubar";
import { FaHome, FaInfoCircle, FaTools, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (event) => {
    const link = event.currentTarget.getAttribute("href");
    if (link) {
      window.location.href = link; // Force reload by setting href directly
    }
  };

  const menuItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/education", label: "Education", icon: <FaGraduationCap /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div style={styles.container}>
      <Menubar style={styles.menubar}>
        {menuItems.map((item) => (
          <MenubarMenu key={item.label.toLowerCase()}>
            <MenubarTrigger>
              <Link
                to={item.to}
                style={navigationMenuTriggerStyle()}
                onClick={handleMenuClick}
              >
                {isMobile ? item.icon : item.label}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        ))}
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
    background: "transparent",
  },

  menubar: {
    background: "transparent",
  },
};

const navigationMenuTriggerStyle = () => {
  return {
    textDecoration: 'none',
    color: 'inherit',
    background: 'transparent',
    border: 'none',
  };
};

export default Menu;
