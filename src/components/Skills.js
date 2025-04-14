/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaDatabase, FaLaptopCode, FaTools, FaCogs, FaServer, FaCode } from 'react-icons/fa';
import { SiOracle, SiMysql, SiPostman } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: -5%;
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

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent 80%);
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--light-color);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const SkillList = styled.ul`
  list-style-type: none;
  position: relative;
  z-index: 1;
`;

const SkillItem = styled.li`
  margin-bottom: 1 rem;
  font-size: 1rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 12px;
    font-size: 1.3rem;
  }
  
  &:hover {
    transform: translateX(5px);
    color: var(--text-color);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeader>
          <SectionTitle>My Skills</SectionTitle>
          <SectionDesc>
            Here are my specialized areas of expertise in Siebel CRM development and data analytics
          </SectionDesc>
        </SectionHeader>
        
        <SkillsGrid>
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <SiOracle />
              </CategoryIcon>
              <CategoryTitle>Oracle Siebel CRM</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>Siebel CRM Configurations</SkillItem>
              <SkillItem>Siebel Workflows</SkillItem>
              <SkillItem>Assignment Manager</SkillItem>
              <SkillItem>Siebel Workspaces</SkillItem>
              <SkillItem>Business Components</SkillItem>
              <SkillItem>Siebel Open UI</SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <FaLaptopCode />
              </CategoryIcon>
              <CategoryTitle>Advanced Components</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>Taskflows</SkillItem>
              <SkillItem>Virtual Business Components (VBC)</SkillItem>
              <SkillItem>External Business Component</SkillItem>
              <SkillItem>Business Services</SkillItem>
              <SkillItem>Runtime Events</SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <FaServer />
              </CategoryIcon>
              <CategoryTitle>Integration & API</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>Siebel Web Services</SkillItem>
              <SkillItem>REST API</SkillItem>
              <SkillItem>Siebel EAI</SkillItem>
              <SkillItem>Web Service Outbound</SkillItem>
              <SkillItem>Integration Objects</SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <FaDatabase />
              </CategoryIcon>
              <CategoryTitle>Databases</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>SQL</SkillItem>
              <SkillItem>MySQL</SkillItem>
              <SkillItem>Oracle Database</SkillItem>
              <SkillItem>Data Modeling</SkillItem>
              <SkillItem>Query Optimization</SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <FaCode />
              </CategoryIcon>
              <CategoryTitle>Development</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>jQuery</SkillItem>
              <SkillItem>eScript</SkillItem>
              <SkillItem>XML</SkillItem>
              <SkillItem>Version Control</SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <CategoryHeader>
              <CategoryIcon>
                <FaCogs />
              </CategoryIcon>
              <CategoryTitle>Data Analytics</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              <SkillItem>Data Visualization</SkillItem>
              <SkillItem>Analytics Workflows</SkillItem>
              <SkillItem>Report Generation</SkillItem>
              <SkillItem>Business Intelligence</SkillItem>
              <SkillItem>Performance Metrics</SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 