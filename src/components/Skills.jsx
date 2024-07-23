// components/Skills.jsx
import React from 'react';
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaUser, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSass, SiVercel, SiVisualstudiocode } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyImage from "../assets/Profile.svg";

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90%;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-bottom: 1rem;
`;

const JustifiedParagraph = styled.p`
  text-align: justify;
  hyphens: auto; // Enable hyphenation to break words when needed
  line-height: 1.5; // Adjust line height for better readability
  @media (max-width: 768px) {
      word-spacing: -2.5px; // Adjust word spacing to reduce gaps
  }
`;

const Skills = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
              My Skills
            </Badge>
          </CardHeader>
          <CardContent>
            <CardTitle>My Technical Experience/Skills</CardTitle>
            <JustifiedParagraph>
            Currently, I am a fresher with a solid understanding of HTML5, CSS3, JavaScript (JS), TypeScript (TS), and React, including responsive design principles. I specialize in building web applications and sites using JavaScript, TypeScript, React, Next.js, and Node. My skills encompass crafting semantic and accessible HTML structures, implementing modern CSS techniques like Flexbox and Grid, and utilizing ES6+ features in JavaScript for dynamic functionality. With proficiency in TypeScript, I ensure type safety and robust coding practices. Additionally, I am experienced in using React hooks, context API, and state management with Redux, while leveraging Next.js for server-side rendering and optimized performance. My focus on responsive design ensures that my applications are accessible and visually appealing across various devices.            </JustifiedParagraph>
          </CardContent>
        </StyledCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Section>
          <SectionTitle>Programming Languages</SectionTitle>
          <IconContainer>
            <IconWrapper>
              <FaHtml5 size={50} />
              <span>HTML</span>
            </IconWrapper>
            <IconWrapper>
              <FaCss3Alt size={50} />
              <span>CSS</span>
            </IconWrapper>
            <IconWrapper>
              <FaJsSquare size={50} />
              <span>JavaScript</span>
            </IconWrapper>
            <IconWrapper>
              <SiTailwindcss size={50} />
              <span>Tailwind</span>
            </IconWrapper>
            <IconWrapper>
              <DiJqueryLogo size={50} />
              <span>jQuery</span>
            </IconWrapper>
          </IconContainer>
        </Section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Section>
          <SectionTitle>Framework/Libraries</SectionTitle>
          <IconContainer>
            <IconWrapper>
              <FaJsSquare size={50} />
              <span>JavaScript</span>
            </IconWrapper>
            <IconWrapper>
              <FaCss3Alt size={50} />
              <span>CSS</span>
            </IconWrapper>
            <IconWrapper>
              <FaHtml5 size={50} />
              <span>HTML</span>
            </IconWrapper>
            <IconWrapper>
              <SiTailwindcss size={50} />
              <span>Tailwind</span>
            </IconWrapper>
            <IconWrapper>
              <SiSass size={50} />
              <span>Sass</span>
            </IconWrapper>
            <IconWrapper>
              <SiNextdotjs size={50} />
              <span>Next.js</span>
            </IconWrapper>
          </IconContainer>
        </Section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Section>
          <SectionTitle>Version Control</SectionTitle>
          <IconContainer>
            <IconWrapper>
              <FaGithub size={50} />
              <span>GitHub</span>
            </IconWrapper>
            <IconWrapper>
              <SiVercel size={50} />
              <span>Vercel</span>
            </IconWrapper>
            <IconWrapper>
              <SiVisualstudiocode size={50} />
              <span>VS Code</span>
            </IconWrapper>
          </IconContainer>
        </Section>
      </motion.div>
    </Container>
  );
};

export default Skills;
