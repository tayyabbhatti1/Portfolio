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
  background-color: ${props => props.scrolled 
    ? 'rgba(15, 23, 42, 0.85)' 
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
  border-bottom: ${props => props.scrolled 
    ? '1px solid rgba(255, 255, 255, 0.1)' 
    : 'none'};
  box-shadow: ${props => props.scrolled ? 'var(--box-shadow)' : 'none'};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.scrolled ? '0.8rem 2rem' : '1.2rem 2rem'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.3s ease;
  
  @media screen and (max-width: 768px) {
    padding: ${props => props.scrolled ? '0.6rem 1.5rem' : '1rem 1.5rem'};
  }
`;

const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: var(--transition);
  position: relative;
  display: inline-block;
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
  
  &:hover {
    color: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30%;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 70%;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  color: var(--primary-color);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: rotate(90deg);
  }
  
  @media screen and (max-width: 968px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.8rem;
  
  @media screen and (max-width: 968px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    padding: 3rem 1.5rem;
    z-index: 50;
    gap: 1.2rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavItem = styled.li`
  margin: 0 0.2rem;
  position: relative;
  
  @media screen and (max-width: 968px) {
    margin: 0.6rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  padding: 0.5rem 0.75rem;
  color: var(--light-color);
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.95rem;
  white-space: nowrap;
  letter-spacing: 0.5px;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
  
  &:hover, &.active {
    color: var(--primary-color);
    transform: translateY(-2px);
    
    &:after {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 968px) {
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
    
    &:hover, &.active {
      color: var(--accent-color);
    }
  }
`;

const ContactButton = styled(Link)`
  padding: 0.6rem 1.4rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 8px;
  font-weight: 500;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    width: 20%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.5s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  @media screen and (max-width: 968px) {
    margin-left: 0;
    margin-top: 1.2rem;
    width: 80%;
    text-align: center;
    background: var(--gradient-accent);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
    
    &:hover {
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
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
      <NavContainer scrolled={scrolled}>
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