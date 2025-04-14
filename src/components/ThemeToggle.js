/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from '@emotion/styled/macro';

// Styled components for better control
const ToggleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
    
    &:before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
`;

const IconWrapper = styled.div`
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  ${ToggleButton}:hover & {
    transform: rotate(360deg);
  }
`;

// Glow effect that appears when hovering
const GlowEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--primary-color);
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  
  ${ToggleButton}:hover & {
    opacity: 0.5;
  }
`;

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check for saved theme, default to dark if none found
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
      document.body.classList.add('light-theme');
    } else {
      // Ensure dark theme is default
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    
    if (isDarkTheme) {
      // Switch to light theme
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark theme
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ToggleButton 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      title={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      <GlowEffect />
      <IconWrapper>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle; 