/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -5%;
    right: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent 70%);
    z-index: 0;
  }
`;

const ExperienceContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: var(--light-color);
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const SectionDesc = styled.p`
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  margin-top: 1.5rem;
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
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color) 0%, var(--secondary-color) 100%);
    opacity: 0.7;
    border-radius: 3px;
    
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
  margin-bottom: 5rem;
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
    width: 24px;
    height: 24px;
    right: -12px;
    top: 20px;
    background: var(--gradient-primary);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
    z-index: 2;
    border: 2px solid rgba(255, 255, 255, 0.2);
    
    @media screen and (max-width: 768px) {
      left: 19px;
      right: auto;
    }
  }
  
  &:nth-of-type(even):after {
    right: auto;
    left: -12px;
    
    @media screen and (max-width: 768px) {
      left: 19px;
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;
    justify-content: flex-start;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 4px solid var(--primary-color);
  max-width: 500px;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 14px solid rgba(30, 41, 59, 0.8);
    right: -14px;
    top: 20px;
    z-index: 1;
    
    @media screen and (max-width: 768px) {
      right: auto;
      left: -14px;
      transform: rotate(180deg);
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent 80%);
    z-index: 0;
  }
  
  ${TimelineItem}:nth-of-type(even) & {
    &:before {
      right: auto;
      left: -14px;
      transform: rotate(180deg);
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--light-color);
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CompanyName = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: var(--primary-color);
  position: relative;
  z-index: 1;
`;

const JobPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
  
  svg {
    color: var(--secondary-color);
    font-size: 1.1rem;
  }
`;

const JobDescription = styled.ul`
  list-style-type: none;
  max-height: ${props => props.isVisible ? '500px' : '0'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 1;
  
  li {
    margin-bottom: 1rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-muted);
    position: relative;
    padding-left: 1.8rem;
    
    &:before {
      content: '•';
      color: var(--primary-color);
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1.3rem;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${TimelineItem}:nth-of-type(odd) & {
    li {
      @media screen and (max-width: 768px) {
        padding-left: 1.8rem;
        padding-right: 0;
        
        &:before {
          left: 0;
          right: auto;
        }
      }
      
      @media screen and (min-width: 769px) {
        padding-left: 0;
        padding-right: 1.8rem;
        
        &:before {
          left: auto;
          right: 0;
        }
      }
    }
  }
`;

const ToggleHint = styled.div`
  color: var(--accent-color);
  font-size: 0.95rem;
  margin-top: ${props => props.isVisible ? '1rem' : '0'};
  font-style: italic;
  text-align: center;
  opacity: ${props => props.isVisible ? '0' : '1'};
  height: ${props => props.isVisible ? '0' : 'auto'};
  overflow: hidden;
  transition: opacity 0.5s ease, height 0.5s ease;
  position: relative;
  z-index: 1;
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
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
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