/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
    top: 10%;
    left: -100px;
    border-radius: 50%;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%);
    bottom: 5%;
    right: -50px;
    border-radius: 50%;
    z-index: 0;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AboutCard = styled(motion.div)`
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: grid;
  grid-template-columns: 400px 1fr;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CardLeft = styled.div`
  background-color: rgba(31, 41, 55, 0.7);
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  
  @media screen and (max-width: 968px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const ProfileImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2.5rem;
  position: relative;
  border: 5px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 2px dashed rgba(99, 102, 241, 0.4);
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileName = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--light-color);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ProfileTitle = styled.p`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
`;

const SocialIcon = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  }
`;

const DownloadButton = styled.a`
  padding: 0.85rem 2.2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 8px;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.25);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.35);
    
    &:before {
      left: 100%;
    }
  }
`;

const CardRight = styled.div`
  padding: 3.5rem;
`;

const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--light-color);
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.h4`
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 2rem;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &:before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const Skill = styled.span`
  font-size: 1.05rem;
  color: var(--text-color);
  font-weight: 500;
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
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--gradient-primary);
  }
  
  @media screen and (max-width: 768px) {
    text-align: center;
    
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const InfoLabel = styled.span`
  min-width: 130px;
  font-weight: 600;
  color: var(--light-color);
  position: relative;
  
  &:after {
    content: ':';
    position: absolute;
    right: 10px;
  }
`;

const InfoText = styled.span`
  color: var(--text-muted);
  
  a {
    color: var(--primary-color);
    transition: var(--transition);
    font-weight: 500;
    
    &:hover {
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.85rem 2.5rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 8px;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.25);
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
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
    
    &:before {
      left: 100%;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CardLeft>
            <ProfileImageWrapper>
              <ProfileImage src="/Profile.jpeg" alt="Muhammad Tayyab" />
            </ProfileImageWrapper>
            <ProfileName>Muhammad Tayyab</ProfileName>
            <ProfileTitle>Siebel CRM Developer</ProfileTitle>
            <SocialIcons>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/muhammad-tayyab7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://github.com/tayyabbhatti1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/_.tayyabbhatti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
            </SocialIcons>
            <DownloadButton href="/Muhammad_Tayyab_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              Download CV
            </DownloadButton>
          </CardLeft>
          
          <CardRight>
            <Heading>Hello</Heading>
            <Subtitle>Here's who I am & what I do</Subtitle>
            <Description>
              I'm a passionate Siebel CRM Developer with extensive experience in implementing and customizing Oracle Siebel solutions.
              With a strong background in data analytics, I bridge the gap between technical CRM implementation and business intelligence.
            </Description>
            <Description>
              My goal is to build robust CRM systems that not only meet business requirements but also provide valuable insights through data analytics.
              I specialize in Siebel CRM Development, Taskflows, Workflows, Assignment Manager, Business Components, API integration, and database optimization.
            </Description>
            <SkillsList>
              <SkillItem>
                <Skill>Siebel CRM Implementation</Skill>
              </SkillItem>
              <SkillItem>
                <Skill>Custom Business Components</Skill>
              </SkillItem>
              <SkillItem>
                <Skill>API Integration</Skill>
              </SkillItem>
              <SkillItem>
                <Skill>Data Analytics</Skill>
              </SkillItem>
              <SkillItem>
                <Skill>Database Optimization</Skill>
              </SkillItem>
              <SkillItem>
                <Skill>Business Intelligence</Skill>
              </SkillItem>
            </SkillsList>
          </CardRight>
        </AboutCard>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 