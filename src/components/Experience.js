/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 0;
  background-color: var(--light-color);
`;

const ExperienceContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const SectionDesc = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 700px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--primary-color);
    
    @media screen and (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 4rem;
  width: 50%;
  
  &:nth-of-type(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
    margin-left: auto;
    
    @media screen and (max-width: 768px) {
      align-self: auto;
      padding-left: 60px;
      padding-right: 0;
    }
  }
  
  &:nth-of-type(odd) {
    .timeline-content {
      align-items: flex-end;
      text-align: right;
      
      @media screen and (max-width: 768px) {
        align-items: flex-start;
        text-align: left;
      }
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    top: 15px;
    background-color: var(--primary-color);
    border-radius: 50%;
    
    @media screen and (max-width: 768px) {
      left: 20px;
      right: auto;
    }
  }
  
  &:nth-of-type(even):after {
    right: auto;
    left: -10px;
    
    @media screen and (max-width: 768px) {
      left: 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;
    justify-content: flex-start;
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 3px solid var(--primary-color);
  max-width: 500px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 12px solid white;
    right: -12px;
    top: 15px;
    
    @media screen and (max-width: 768px) {
      right: auto;
      left: -12px;
      transform: rotate(180deg);
    }
  }
  
  ${TimelineItem}:nth-of-type(even) & {
    &:before {
      right: auto;
      left: -12px;
      transform: rotate(180deg);
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const JobPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  
  svg {
    color: var(--primary-color);
  }
`;

const JobDescription = styled.ul`
  list-style-type: none;
  max-height: ${props => props.isVisible ? '500px' : '0'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  
  li {
    margin-bottom: 0.8rem;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '•';
      color: var(--primary-color);
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1.2rem;
    }
  }
  
  ${TimelineItem}:nth-of-type(odd) & {
    li {
      @media screen and (max-width: 768px) {
        padding-left: 1.5rem;
        padding-right: 0;
        
        &:before {
          left: 0;
          right: auto;
        }
      }
      
      @media screen and (min-width: 769px) {
        padding-left: 0;
        padding-right: 1.5rem;
        
        &:before {
          left: auto;
          right: 0;
        }
      }
    }
  }
`;

const ToggleHint = styled.div`
  color: var(--primary-color);
  font-size: 0.9rem;
  margin-top: ${props => props.isVisible ? '1rem' : '0'};
  font-style: italic;
  text-align: center;
  opacity: ${props => props.isVisible ? '0' : '1'};
  height: ${props => props.isVisible ? '0' : 'auto'};
  overflow: hidden;
  transition: opacity 0.3s ease, height 0.3s ease;
`;

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  
  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const experiences = [
    {
      title: "Siebel Consultant",
      company: "Saudi Business Machine (SBM)",
      period: "Feb 2024 – Present",
      description: [
        "Developed REST APIs improving system performance by 30%",
        "Enhanced Siebel workflows with 25% efficiency gain",
        "Executed 50+ test cases ensuring 99.9% uptime",
        "Configured VBCs & EBCs for optimized data processing"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Speridian Technology",
      period: "Oct 2022 – Feb 2024",
      description: [
        "Implemented Allied Bank onboarding with 30% faster processing",
        "Configured STC Assignment Manager with 35% efficiency improvement",
        "Developed CDA Dubai Web Services reducing turnaround by 25%",
        "Customized Siebel Open UI for banking & public sectors",
        "Trained 5+ consultants on Siebel configuration & best practices"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionHeader>
          <SectionTitle>Experience</SectionTitle>
          <SectionDesc>
            My professional journey as a Siebel CRM Developer
          </SectionDesc>
        </SectionHeader>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineContent 
                className="timeline-content"
                onClick={() => toggleExpand(index)}
              >
                <JobTitle>{exp.title}</JobTitle>
                <CompanyName>{exp.company}</CompanyName>
                <JobPeriod>
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </JobPeriod>
                <ToggleHint isVisible={expandedItems[index]}>
                  Click to see details
                </ToggleHint>
                <JobDescription isVisible={expandedItems[index]}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 