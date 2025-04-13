/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--dark-color);
  color: var(--light-color);
  padding: 4rem 0 2rem;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const FooterAbout = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
    
    @media screen and (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
`;

const QuickLink = styled.li`
  margin-bottom: 0.8rem;
`;

const QuickLinkAnchor = styled.a`
  color: #ccc;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    color: var(--primary-color);
    transform: translateX(5px);
    
    @media screen and (max-width: 768px) {
      transform: none;
    }
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactText = styled.span`
  color: #ccc;
`;

const ContactLink = styled.a`
  color: #ccc;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <div>
            <FooterLogo>Muhammad Tayyab</FooterLogo>
            <FooterAbout>
              A passionate Siebel CRM Developer specializing in implementing and customizing Oracle Siebel solutions with expertise in data analytics. Let's collaborate to enhance your CRM capabilities.
            </FooterAbout>
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
          </div>
          
          <div>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              <QuickLink>
                <QuickLinkAnchor href="#home">Home</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="#about">About</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="#skills">Skills</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="#projects">Projects</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="#experience">Experience</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="#contact">Contact</QuickLinkAnchor>
              </QuickLink>
            </QuickLinks>
          </div>
          
          <div>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactText>Lahore, Punjab, Pakistan</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactLink href="mailto:tayyabmuhammad743@gmail.com">tayyabmuhammad743@gmail.com</ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLink href="tel:+923390002105">+92 339 000 2105</ContactLink>
              </ContactItem>
            </ContactInfo>
          </div>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} Muhammad Tayyab. All Rights Reserved. Made with <FaHeart style={{ color: 'red' }} /> by Tayyab
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 