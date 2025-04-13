/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--light-bg), rgba(58, 134, 255, 0.05));
`;

const ProjectsContainer = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.7rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 30px;
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--light-color)' : 'var(--text-color)'};
  font-weight: 500;
  border: ${props => props.active ? 'none' : '1px solid var(--text-color)'};
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.active ? 'var(--box-shadow)' : 'none'};
    background: ${props => props.active ? 'var(--gradient-primary)' : 'rgba(58, 134, 255, 0.1)'};
  }
  
  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const ProjectsRow = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  gap: 2rem;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--light-color);
  border-radius: 10px;
  overflow: hidden;
  min-width: 350px;
  flex: 0 0 350px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ProjectCard}:hover img {
    transform: scale(1.05);
  }
`;

const ProjectImageText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  
  ${ProjectCard}:hover & {
    color: var(--light-color);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  max-height: 100px;
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
  background: ${Math.random() > 0.5 ? 'rgba(58, 134, 255, 0.1)' : 'rgba(255, 190, 11, 0.1)'};
  color: ${Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--secondary-color)'};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.href.includes('github') ? 'var(--gradient-primary)' : 'var(--gradient-accent)'};
  color: var(--light-color);
  border-radius: 5px;
  font-size: 0.9rem;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ScrollControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ScrollButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
      return <img src="/Allied_Bank.png" alt={project.title} />;
    } else if (project.title.includes('Community Development Authority')) {
      return <img src="/CDA_Dubai.png" alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    }else if (project.title.includes('Riyad Bank')) {
      return <img src="/Riyad_Bank.jpg" alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    }else if (project.title.includes('STC-PRM Portal')) {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
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