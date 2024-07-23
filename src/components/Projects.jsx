import React from 'react';
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaUser, FaExternalLinkAlt } from "react-icons/fa";
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

const MainCard = styled(Card)`
background-color: #000;
color: #fff;
width: 100%;
max-width: 1500px; /* Adjust width as needed */
border: 1px solid #444;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-bottom: 2rem; /* Space between cards */

`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Content = styled.p`
  color: #fff;
  text-align: left;
  line-height: 1.6;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap to the next line if there is not enough space */
  gap: 2rem;
  width: 100%;
  max-width: 1500px;
  justify-content: center; /* Centers the cards horizontally */
`;

const AnimatedProjectCard = styled(motion.div)`
  background-color: black;
  color: #fff;
  flex: 1 1 calc(33.333% - 2rem); /* Responsive card width with gap adjustment */
  max-width: 500px;
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box; /* Ensures padding is included in width calculation */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d; /* Required for 3D effects */
  @media (max-width: 768px) {
  max-width:330px;
}

  &:hover {
    transform: rotateY(15deg) rotateX(10deg) translateZ(20px); /* 3D rotation effect */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectCardHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectCardTitle = styled(CardTitle)`
  font-size: 1.2rem;
  color: #fff;
`;

const ProjectCardContent = styled(CardContent)`
  text-align:  justify;
  word-spacing: -1.5px;
  @media (max-width: 768px) {
      word-spacing: -2.5px; // Adjust word spacing to reduce gaps
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const VisitButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #fff;
  margin-inline: 100px;
  background-color: black;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 1rem;
  border: 1px solid white;
  text-align: center;
  @media (max-width: 768px) {
      margin-inline: 0;
  }
  
  &:hover {
    background-color: white;
    color: black;
  }
  
  svg {
    margin-left: 0.5rem; /* Space between text and icon */
  }
`;

const JustifiedParagraph = styled.p`
  text-align: justify;
  hyphens: auto; // Enable hyphenation to break words when needed
  line-height: 1.5; // Adjust line height for better readability
  @media (max-width: 768px) {
      word-spacing: -2.5px; // Adjust word spacing to reduce gaps
  }
`;

const Project = () => {
  // Sample project data
  const projects = [
    {
      title: "CRM-software-Task_management_system",
      description: "Researched and developed a CRM software using PHP for application logic, SQL for the database, and SMTP for email functionality. The CRM includes customer relationship management, data storage and retrieval, email integration, and user authentication.",
      badges: ["PHP", "MySQL", "SMTP", "CRM"],
      link: "https://github.com/elanchandru2/CRM-software-Task_managment_system-"
    },
    {
      title: "TechTrooper (React And API)",
      description: "Built a React-based ecommerce site with API integration for seamless functionality and a dynamic user experience. The site includes essential ecommerce functionalities such as product browsing, cart management, secure payment processing, and order tracking.",
      badges: ["JavaScript", "CSS", "React", "API"],
      link: "https://example.com/techtrooper"
    },
    {
      title: "Portfolio",
      description: "My personal portfolio is crafted with HTML, Tailwind CSS, JavaScript, jQuery, and Bootstrap. It features a modern, responsive design with interactive elements like animations and scroll effects. The portfolio includes a contact form and sections detailing my experience, projects, and skills.",
      badges: ["HTML", "Tailwind CSS", "JavaScript", "Bootstrap", "jQuery"],
      link: "https://example.com/portfolio"
    },
    {
      title: "Chat Application",
      description: "I developed a chat application using the Chatengine API, providing real-time communication and file transfer. Built with React, the app offers instant messaging and seamless file sharing. Its modern functionality ensures a responsive and engaging user experience.",
      badges: ["React", "Chatengine API", "Real-time Communication", "Tailwind CSS"],
      link: "https://example.com/chat-application"
    },
    {
      title: "Collection of Form Data",
      description: "I developed a form that captures and stores data in MongoDB. Using an API, the form allows for easy data retrieval and display, streamlining data management and access. Additionally, it features real-time updates for a seamless user experience.",
      badges: ["TypeScript", "Node.js", "MongoDB", "API"],
      link: "https://example.com/form-data"
    },
    {
      title: "Spinning Animation",
      description: "I developed a spinning animation using CSS for a progressive and innovative spiral loading effect. This animation enhances user experience with a dynamic and visually engaging progress indicator. Its smooth and modern design adapts well to various applications.",
      badges: ["CSS", "Animation", "UI/UX"],
      link: "https://example.com/spinning-animation"
    }
  ];

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MainCard>
          <CardHeader>
            <Badge>
              <Avatar>
                <AvatarImage src={MyImage} alt="Profile" />
                <AvatarFallback>
                  <FaUser />
                </AvatarFallback>
              </Avatar>
              Project
            </Badge>
          </CardHeader>
          <CardContent>
            <SectionTitle>My Projects</SectionTitle>
            <JustifiedParagraph>
              I love to Build Cool Projects. Here, you'll find a curated collection of my creative endeavors and technical projects. Each piece represents a journey of innovation, problem-solving, and continuous learning. Feel free to explore this showcase of my passion and expertise in action.
            </JustifiedParagraph>
          </CardContent>
        </MainCard>
      </motion.div>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCardHeader>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <BadgeContainer>
                {project.badges.map((badge, idx) => (
                  <Badge key={idx}>{badge}</Badge>
                ))}
              </BadgeContainer>
            </ProjectCardHeader>
            <ProjectCardContent>
              <p>{project.description}</p>
              {project.link && (
                <VisitButton href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                  <FaExternalLinkAlt />
                </VisitButton>
              )}
            </ProjectCardContent>
          </AnimatedProjectCard>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Project; 
