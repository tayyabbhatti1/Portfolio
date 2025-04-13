/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: var(--transition);
  background-color: ${props => props.scrolled ? 'var(--light-color)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? 'var(--box-shadow)' : 'none'};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  color: ${props => props.isOpen ? 'var(--light-color)' : 'var(--dark-color)'};
  
  @media screen and (max-width: 968px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
  
  @media screen and (max-width: 968px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: var(--dark-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
    padding: 3rem 1.5rem;
    z-index: 50;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  margin: 0 0.2rem;
  
  @media screen and (max-width: 968px) {
    margin: 0.75rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  padding: 0.5rem 0.75rem;
  color: ${props => props.scrolled ? 'var(--dark-color)' : 'var(--dark-color)'};
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.95rem;
  white-space: nowrap;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    background: var(--primary-color);
    transition: var(--transition);
    transform: translateX(-50%);
    border-radius: 1px;
  }
  
  &:hover, &.active {
    color: var(--primary-color);
    
    &:after {
      width: 60%;
    }
  }
  
  @media screen and (max-width: 968px) {
    color: var(--light-color);
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    
    &:hover, &.active {
      color: var(--accent-color);
    }
  }
`;

const ContactButton = styled(Link)`
  padding: 0.6rem 1.2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  margin-left: 0.75rem;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
  font-size: 0.95rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(79, 70, 229, 0.3);
  }
  
  @media screen and (max-width: 968px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 80%;
    text-align: center;
    background: var(--gradient-accent);
    box-shadow: 0 4px 6px rgba(249, 115, 22, 0.2);
    
    &:hover {
      box-shadow: 0 6px 10px rgba(249, 115, 22, 0.3);
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
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
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo scrolled={scrolled} href="#home">Muhammad Tayyab</Logo>
        
        <MobileMenuIcon onClick={toggleMenu} isOpen={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
        
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="experience" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="testimonials" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem>
            <ContactButton 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </ContactButton>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Navbar; 