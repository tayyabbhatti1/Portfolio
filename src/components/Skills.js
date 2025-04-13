/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaDatabase, FaLaptopCode, FaTools, FaCogs, FaServer, FaCode } from 'react-icons/fa';
import { SiOracle, SiMysql, SiPostman } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--light-color);
  position: relative;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: var(--light-color);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--primary-color);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--dark-color);
`;

const SkillList = styled.ul`
  list-style-type: none;
`;

const SkillItem = styled.li`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 10px;
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
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