/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--light-color), var(--light-bg));
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
  background-color: var(--light-color);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: grid;
  grid-template-columns: 400px 1fr;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CardLeft = styled.div`
  background-color: var(--light-color);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 968px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

const ProfileImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 5px solid var(--secondary-color);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 0.5rem;
`;

const ProfileTitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-3px);
  }
`;

const DownloadButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background-color: #4a2ebe;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(94, 59, 238, 0.2);
  }
`;

const CardRight = styled.div`
  padding: 3rem;
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: '•';
    color: var(--primary-color);
    font-weight: bold;
  }
`;

const Skill = styled.span`
  font-size: 1rem;
  color: var(--text-color);
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
  color: var(--dark-color);
  position: relative;
  
  &:after {
    content: ':';
    position: absolute;
    right: 10px;
  }
`;

const InfoText = styled.span`
  color: var(--text-color);
  
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
  padding: 0.8rem 2.5rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CardLeft>
            <ProfileImageWrapper>
              <ProfileImage src="/Profile.jpeg" alt="Muhammad Tayyab" />
            </ProfileImageWrapper>
            <ProfileName>Muhammad Tayyab</ProfileName>
            <ProfileTitle>Siebel CRM Developer</ProfileTitle>
            <SocialIcons>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/muhammad-tayyab7/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://github.com/tayyabbhatti1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/_.tayyabbhatti/" target="_blank" rel="noopener noreferrer">
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