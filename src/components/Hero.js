/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
  background: linear-gradient(135deg, var(--light-bg) 0%, rgba(58, 134, 255, 0.1) 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 3rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media screen and (max-width: 968px) {
    margin-top: 3rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.8rem 2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  box-shadow: var(--box-shadow);
  
  &:hover {
    background: linear-gradient(45deg, #0056b3, var(--primary-color));
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: var(--dark-color);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ProfileCircle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: var(--box-shadow);
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed var(--primary-color);
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
  
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const ProfileContent = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--light-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubHeading>Hello, I'm</SubHeading>
            <Heading>Muhammad Tayyab</Heading>
            <Description>
              A passionate Siebel CRM Developer with expertise in Data Analytics. 
              I specialize in building robust CRM solutions and delivering data-driven insights that drive business value.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton href="#projects">View Projects</PrimaryButton>
              <SecondaryButton href="#contact">Contact Me</SecondaryButton>
            </ButtonGroup>
            
            <SocialIcons>
              <SocialIcon href="https://github.com/tayyabbhatti1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/muhammad-tayyab7/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
            </SocialIcons>
          </motion.div>
        </HeroContent>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileCircle>
            <ProfileContent>
              <img src="/Profile.jpeg" alt="Muhammad Tayyab" />
            </ProfileContent>
          </ProfileCircle>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 