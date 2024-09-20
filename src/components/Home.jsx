import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import TextTransition, { presets } from "react-text-transition";
import { FaTelegramPlane, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import MyImage from '../assets/Profile.svg'; // Update the path to your image
import { motion } from "framer-motion"; // Import motion from framer-motion
import Resume from "../assets/Resume_From_Chandru.pdf";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f0f0f0;
  margin-top: 15vh;
  margin-left: 5vw;
  color: #333;
  padding: 2rem;
  text-align: left;
  background: transparent;

  @media (max-width: 768px) {
    margin-top: 10vh;
    margin-left: 3vw;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 5vh;
    margin-left: 2vw;
    padding: 1rem;
  }
`;

const Intro = styled(motion.p)`
  font-size: 8rem;
  color: white;
  margin-top: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  color: white;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const IconContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 10px;
  }
`;

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  padding: 0.5rem;
  background: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`;

const DownloadButton = styled(motion.button)`
  --btn-default-bg: #000;
  --btn-padding: 15px 20px;
  --btn-hover-bg: transparent;
  --btn-transition: .3s;
  --btn-letter-spacing: .1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: rgba(0, 0, 0, 0.137);
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #fff;
  --default-btn-color: #fff;
  --font-size: 16px;
  --font-weight: 600;
  --font-family: Menlo, Roboto Mono, monospace;
  margin-top: 20px;

  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  border: 2px solid var(--default-btn-color);
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);

  span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  &:hover, &:focus {
    background: var(--btn-hover-bg);
    color: var(--hover-btn-color);
    border-color: var(--hover-btn-color);
  }

  &:hover span, &:focus span {
    color: var(--hover-btn-color);
  }

  &:hover span::before, &:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }

  @keyframes chitchat {
    0% { content: "#"; }
    5% { content: "."; }
    10% { content: "^{"; }
    15% { content: "-!"; }
    20% { content: "#$_"; }
    25% { content: "№:0"; }
    30% { content: "#{+."; }
    35% { content: "@}-?"; }
    40% { content: "?{4@%"; }
    45% { content: "=.,^!"; }
    50% { content: "?2@%"; }
    55% { content: "\;1}]"; }
    60% { content: "?{%:%"; right: 0; }
    65% { content: "|{f[4"; right: 0; }
    70% { content: "{4%0%"; right: 0; }
    75% { content: "'1_0<"; right: 0; }
    80% { content: "{0%"; right: 0; }
    85% { content: "]>'"; right: 0; }
    90% { content: "4"; right: 0; }
    95% { content: "2"; right: 0; }
    100% { content: ""; right: 0; }
  }
`;

const ImageWrapper = styled(motion.div)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Home = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "Web Designer",
    "Frontend Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }} // Faster animation
    >
      <Description
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }} // Faster animation
      >
        Hi, My Name is
      </Description>
      <Intro
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }} // Faster animation
      >
        Chandru._
      </Intro>
      <Description
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }} // Faster animation
      >
        I am Full Stack Developer &{" "}
        <TextTransition
          inline
          springConfig={presets.wobbly}
          style={{ fontSize: '1.6rem', fontWeight: 'bold' }}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </Description>
      <IconContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }} // Faster animation
      >
        <IconButton as="a" href="https://t.me/Chandru53691" target="_blank">
          <FaTelegramPlane />
        </IconButton>
        <IconButton as="a" href="https://wa.me/+918778622935" target="_blank">
          <FaWhatsapp />
        </IconButton>
        <IconButton as="a" href="https://www.linkedin.com/in/chandru-e-113b8b2a2/" target="_blank">
          <FaLinkedin />
        </IconButton>
        <IconButton as="a" href="https://github.com/elanchandru2" target="_blank">
          <FaGithub />
        </IconButton>
      </IconContainer>
      <DownloadButton 
        as="a"
        href={Resume}
        target="_blank"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }} // Faster animation
      >
        <span>Download My Resume</span>
      </DownloadButton>
      <ImageWrapper
        transition={{ duration: 0.8, delay: 1.8 }} // Faster animation
      >
        <img src={MyImage} alt="Profile" />
      </ImageWrapper>
    </Container>
  );
};

export default Home;
