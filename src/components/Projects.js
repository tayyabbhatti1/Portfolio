/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -15%;
    left: -5%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.07), transparent 70%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: -5%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
    z-index: 0;
  }
`;

const ProjectsContainer = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  background: ${props => props.active ? 'var(--gradient-primary)' : 'rgba(30, 41, 59, 0.6)'};
  color: ${props => props.active ? 'var(--light-color)' : 'var(--text-muted)'};
  font-weight: 500;
  border: ${props => props.active ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: ${props => props.active ? '0 10px 25px rgba(99, 102, 241, 0.3)' : 'none'};
  backdrop-filter: blur(var(--blur-amount));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.active ? 
      '0 15px 30px rgba(99, 102, 241, 0.4)' : 
      '0 10px 20px rgba(30, 41, 59, 0.4)'};
    
    &:before {
      left: 100%;
    }
  }
  
  @media screen and (max-width: 768px) {
    margin-bottom: 0.8rem;
    padding: 0.7rem 1.5rem;
  }
`;

const ProjectsRow = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 2rem 0.5rem;
  gap: 2.5rem;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: 16px;
  overflow: hidden;
  min-width: 350px;
  flex: 0 0 350px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: rgba(15, 23, 42, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(15, 23, 42, 0.8) 100%
    );
    opacity: 0.6;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  ${ProjectCard}:hover img {
    transform: scale(1.08);
  }
  
  ${ProjectCard}:hover &:before {
    opacity: 0.4;
  }
`;

const ProjectImageText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary-color);
  z-index: 2;
  
  ${ProjectCard}:hover & {
    color: var(--light-color);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  color: var(--light-color);
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  max-height: 120px;
  overflow-y: auto;
  padding-right: 5px;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
  }
`;

const ProjectTag = styled.span`
  display: inline-block;
  background: ${() => {
    const options = [
      'rgba(99, 102, 241, 0.15)',
      'rgba(16, 185, 129, 0.15)',
      'rgba(249, 115, 22, 0.15)'
    ];
    return options[Math.floor(Math.random() * options.length)];
  }};
  color: ${() => {
    const options = [
      'var(--primary-color)',
      'var(--secondary-color)',
      'var(--accent-color)'
    ];
    return options[Math.floor(Math.random() * options.length)];
  }};
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1.2rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.href.includes('github') ? 'var(--gradient-primary)' : 'var(--gradient-accent)'};
  color: var(--light-color);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
    
    &:before {
      left: 100%;
    }
  }
  
  span, svg {
    position: relative;
    z-index: 1;
  }
`;

const ScrollControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ScrollButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.2rem;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const scrollContainerRef = useRef(null);
  
  const projectsData = [
    {
      id: 1,
      title: 'Riyad Bank, Saudi Arabia',
      description: 'Boosted system performance by 30% via REST API integrations and optimized Siebel Web Services with ReactJs, while configuring VBC/EBC for faster data retrieval and seamless operations.',
      tags: ['Financial Services', 'IP 20.4', 'Siebel Web Services', 'Siebel CRM', 'Siebel Escript', 'EBC', 'VBC', 'SQL', 'Workflows', 'Inbound/Outbount Integrations', 'IO Configurations', 'EAI'],
      category: 'CRM',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Allied Bank Lt., Pakistan',
      description: 'Enhanced onboarding time by 30% by customizing Siebel Taskflows. Worked on Workflows for Accounts, Service Requests, Leads, and enhanced automation via EAI, SQL-based reporting, and seamless third-party integrations.',
      tags: ['Financial Services', 'IP 21.11', 'Siebel CRM Configurations', 'Taskflow','EBC', 'PL/SQL', 'SQL', 'Workflows', 'Inbound/Outbound Integrations', 'Escript', 'EAI'],
      category: 'CRM',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Community Development Authority, Dubai',
      description: "Resolved critical issues, ensured 99.9% uptime for Siebel CRM, and improved query efficiency through SQL optimizations and workflow automation for CDA's governance workflows.",
      tags: ['Public Sector', 'IP 17.2', 'Siebel CRM', 'MySQL', 'EBC', 'Workflows', 'Integration', 'Siebel Web Services', 'Client facing', 'EAI'],
      category: 'CRM',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },
    {
      id: 4,
      title: 'STC-PRM Portal',
      description: "Enhanced Service Request Module and Siebel Open UI, slashing response time and automated Assignment Manager to minimize manual efforts for STC's customer operations",
      tags: ['Partner Domain','IP 24.2', 'Siebel PRM', 'Data Gathering', 'Workflows', 'Assignment Manager', 'EBC'],
      category: 'CRM',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },
    
    /*{
      id: 5,
      title: 'Blog Platform',
      description: 'A MERN stack blog platform with CRUD operations.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'CRM',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application to monitor workout progress.',
      tags: ['React', 'Chart.js', 'Firebase'],
      category: 'frontend',
      //github: 'https://github.com',
      //live: 'https://example.com',
    },*/
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
    
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 380; // Card width + gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  const getProjectImage = (project) => {
    if (project.title.includes('Allied Bank')) {
      return <img src="/Allied_Bank.png" alt={project.title} style={{ maxWidth: '90%', maxHeight: '90%' }} />;
    } else if (project.title.includes('Community Development Authority')) {
      return <img src="/CDA_Dubai.png" alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    } else if (project.title.includes('Riyad Bank')) {
      return <img src="/Riyad_Bank.jpg" alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    } else if (project.title.includes('STC-PRM Portal')) {
      return <img src="/STC.png" alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    } else {
      return <ProjectImageText>{project.title.substring(0, 2)}</ProjectImageText>;
    }
  };
  
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionTitle>Projects</SectionTitle>
          <SectionDesc>
            Check out some of the projects I've worked on
          </SectionDesc>
        </SectionHeader>
        
        <FilterButtons>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={filter === 'CRM'} 
            onClick={() => setFilter('CRM')}
          >
            CRM
          </FilterButton>
          <FilterButton 
            active={filter === 'Data Analytics'} 
            onClick={() => setFilter('Data Analytics')}
          >
            Data Analytics
          </FilterButton>
        </FilterButtons>
        
        <ProjectsRow ref={scrollContainerRef}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectImage>
                {getProjectImage(project)}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>GitHub</span>
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsRow>
        
        <ScrollControls>
          <ScrollButton onClick={() => handleScroll('left')} aria-label="Scroll left">
            <FaChevronLeft />
          </ScrollButton>
          <ScrollButton onClick={() => handleScroll('right')} aria-label="Scroll right">
            <FaChevronRight />
          </ScrollButton>
        </ScrollControls>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 