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
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.2), transparent 60%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 70%;
    height: 70%;
    background: radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.1), transparent 60%);
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
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
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background: var(--gradient-primary);
    top: 50%;
    left: -55px;
    transform: translateY(-50%);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 968px) {
    &:before {
      display: none;
    }
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--light-color);
  position: relative;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 90%;
  
  @media screen and (max-width: 968px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.85rem 2.2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 8px;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 0.5px;
  
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
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    
    &:before {
      left: 100%;
    }
  }
`;

const SecondaryButton = styled.a`
  padding: 0.85rem 2.2rem;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  cursor: pointer;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--primary-color);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  
  &:hover {
    color: var(--light-color);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);
    
    &:before {
      width: 100%;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.6rem;
  color: var(--text-color);
  transition: var(--transition);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(5px);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  
  @media screen and (max-width: 968px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ProfileCircle = styled.div`
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25);
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border-radius: 50%;
    border: 2px dashed rgba(99, 102, 241, 0.5);
    animation: rotate 30s linear infinite;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    border: 1px dashed rgba(99, 102, 241, 0.3);
    animation: rotate 50s linear infinite reverse;
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
    width: 300px;
    height: 300px;
  }
`;

const ProfileContent = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--dark-secondary);
  z-index: 2;
  border: 4px solid rgba(255, 255, 255, 0.1);
  
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
            transition={{ duration: 0.7 }}
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
          transition={{ duration: 0.7, delay: 0.2 }}
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