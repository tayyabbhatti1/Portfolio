/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'var(--light-color)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 1px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: var(--transition);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  @media screen and (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--light-color);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media screen and (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const ResumeButton = styled.a`
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  margin-left: 1rem;
  transition: var(--transition);
  
  &:hover {
    background-color: #4a2ebe;
  }
  
  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    display: inline-block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>Portfolio</Logo>
      
      <MobileMenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
      
      <NavLinks isOpen={isOpen}>
        <NavItem>
          <NavLink 
            to="home" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="about" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="skills" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="experience" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="testimonials" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeButton>
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar; 