// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FaUser, FaLanguage, FaFlag, FaGenderless, FaHeart } from "react-icons/fa";
import styled from 'styled-components';
import MyImage from "../assets/Profile.svg";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center cards horizontally */
  gap: 2rem; /* Space between cards */
  padding: 2rem; /* Add padding around the container */
  background-color: transparent;
`;

const StyledCard = styled(Card)`
  background-color: #000;
  color: #fff;
  width: 100%;
  max-width: 1500px; /* Adjust width as needed */
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem; /* Space between cards */
`;

const FlexCard = styled(StyledCard)`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  align-items: flex-start; /* Align items to the start of the flex container */
  padding: 2rem; /* Add padding inside the card */
  gap: 2rem; /* Space between the FlexContainer and DevCard */
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line if needed */
  gap: 2rem; /* Space between items */
  flex: 1; /* Take up remaining space */
`;

const FlexItem = styled.div`
  flex: 1 1 45%; /* Adjust width of each item */
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  & > svg {
    margin-right: 0.5rem;
  }
`;

const JustifiedParagraph = styled.p`
  text-align: justify;
  hyphens: auto; // Enable hyphenation to break words when needed
  line-height: 1.5; // Adjust line height for better readability
  @media (max-width: 768px) {
      word-spacing: 1.5px; // Adjust word spacing to reduce gaps
  }
`;

const DevCardContainer = styled.div`
  flex: 1; /* Take up remaining space */
  display: flex;
  align-items: center;
  justify-content: center; /* Center the Dev Card horizontally */
  padding: 1rem; /* Add padding around the Dev Card */
`;

const About = () => {
  return (
    <Container>
      {/* First Card with Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <StyledCard>
          <CardHeader>
            <Badge>
              <Avatar>
                <AvatarImage src={MyImage} alt="Profile" />
                <AvatarFallback>
                  <FaUser />
                </AvatarFallback>
              </Avatar>
              About Me
            </Badge>
          </CardHeader>
          <CardContent>
            <CardTitle>
              Full Stack Web Developer
            </CardTitle>
            <JustifiedParagraph style={{ textAlign: 'justify', marginBottom: '1rem', marginTop: '1rem', }}>
              Hello, I'm Chandru, a dedicated developer specializing in React, PHP, and SQL, with a strong foundation in UI/UX design using Figma. I thrive on crafting intuitive interfaces and scalable solutions that elevate user experiences. Whether it's architecting databases, optimizing backend processes, or refining front-end interactions, I am passionate about every aspect of the development lifecycle.
            </JustifiedParagraph>
            <br />
            <JustifiedParagraph style={{ textAlign: 'justify', marginBottom: '1rem', marginTop: '1rem', }}>
              My journey in software engineering has equipped me with the skills to tackle intricate problems and innovate with technology. From conceptualization to deployment, I take pride in transforming ideas into robust, user-centric applications. Let's collaborate and create something exceptional together!
            </JustifiedParagraph>
          </CardContent>
        </StyledCard>
      </motion.div>

      {/* Second Card with Animation and Dev Card */}
      <FlexCard>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <FlexContainer>
            <FlexItem>
              <SectionHeading>
                <FaLanguage /> Languages
              </SectionHeading>
              <List>
                <ListItem><FaLanguage /> Tamil</ListItem>
                <ListItem><FaLanguage /> English</ListItem>
              </List>
            </FlexItem>

            <FlexItem>
              <SectionHeading>
                <FaFlag /> Nationality
              </SectionHeading>
              <List>
                <ListItem><FaFlag /> India</ListItem>
              </List>
            </FlexItem>

            <FlexItem>
              <SectionHeading>
                <FaGenderless /> Gender
              </SectionHeading>
              <List>
                <ListItem><FaGenderless /> Male</ListItem>
              </List>
            </FlexItem>

            <FlexItem>
              <SectionHeading>
                <FaHeart /> Hobbies
              </SectionHeading>
              <List>
                <ListItem><FaHeart /> Coding</ListItem>
                <ListItem><FaHeart /> Playing games</ListItem>
                <ListItem><FaHeart /> Watching Anime</ListItem>
                <ListItem><FaHeart /> Tech Blog writing</ListItem>
                <ListItem><FaHeart /> Creating Cool Projects</ListItem>
              </List>
            </FlexItem>
          </FlexContainer>
        </motion.div>

        <DevCardContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://app.daily.dev/chandru75">
              <img 
                src="https://api.daily.dev/devcards/v2/Wyw1PbpYvQntPNAxlXd77.png?type=default&r=any"
                width="356" 
                alt="Chandru's Dev Card"
              />
            </a>
          </motion.div>
        </DevCardContainer>
      </FlexCard>
    </Container>
  );
};

export default About;
