import React from 'react';
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaUser } from "react-icons/fa";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyImage from "../assets/Profile.svg";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: transparent;
  width: 100%;
`;

const MainCard = styled(Card)`
  background-color: #000;
  color: #fff;
  width: 100%;
  max-width: 1500px;
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
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

const TimelineContainer = styled.div`
  width: 100%;  
  max-width: 1000px;
  height: 500px;
  overflow-y: auto;
  background-color: #000;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  margin: 0 auto;
  box-sizing: border-box;

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 8px;
  }

  /* Responsive design */
  @media (max-width: 1200px) {
    height: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const StyledTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: #000;
    color: #fff;
    border: 1px solid #444;
    padding: 1rem;
  }
  
  .vertical-timeline-element-title {
    color: #fff;
  }
  
  .vertical-timeline-element-subtitle {
    color: #ddd;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #444;
  }
  
  .vertical-timeline-element-icon {
    background: #000;
    color: #fff;
  }
`;

const Project = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
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
              Education
            </Badge>
          </CardHeader>
          <CardContent>
            <SectionTitle>Education</SectionTitle>
            <Content>
              My educational background has provided me with a comprehensive understanding of both the theoretical and practical aspects of technology and innovation. Here are some key milestones in my academic journey:
            </Content>
          </CardContent>
        </MainCard>
        <br />
        <MainCard>
          <CardContent>
            <SectionTitle>Education Timeline</SectionTitle>
          </CardContent>
          <TimelineContainer>
            <VerticalTimeline>
              <StyledTimelineElement
                className="vertical-timeline-element--education"
                date="2018"
                icon={<FaUser />}
              >
                <h3 className="vertical-timeline-element-title">High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Jawahar Matric Higher Secondary School</h4>
                <p>
                  Successfully completed my high school education with a focus on science and mathematics.
                </p>
              </StyledTimelineElement>
              <StyledTimelineElement
                className="vertical-timeline-element--education"
                date="2018 - 2021"
                icon={<FaUser />}
              >
                <h3 className="vertical-timeline-element-title">Diploma in Mechanical Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Swamy Abedhanandha Polytechnic College, Tiruvannamalai</h4>
                <p>
                  Completed a diploma in Mechanical Engineering, acquiring essential skills and knowledge in the field.
                </p>
              </StyledTimelineElement>
              <StyledTimelineElement
                className="vertical-timeline-element--education"
                date="2021 - 2024"
                icon={<FaUser />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor's Degree in Mechatronics Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Hindusthan College of Engineering and Technology</h4>
                <p>
                  Pursued a bachelor's degree in Mechatronics Engineering, focusing on the integration of mechanical, electronics, and computer engineering.
                </p>
              </StyledTimelineElement>
              <StyledTimelineElement
                className="vertical-timeline-element--education"
                date="2023 - 2024"
                icon={<FaUser />}
              >
                <h3 className="vertical-timeline-element-title">Full Stack Web Development Course</h3>
                <h4 className="vertical-timeline-element-subtitle">Pumo Technology</h4>
                <p>
                  Completed a professional course in Full Stack Web Development, enhancing my skills in front-end and back-end technologies.
                </p>
              </StyledTimelineElement>
            </VerticalTimeline>
          </TimelineContainer>
        </MainCard>
      </motion.div>
    </Container>
  );
};

export default Project;
