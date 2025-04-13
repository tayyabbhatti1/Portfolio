/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from '@emotion/styled/macro';

// Styled components for better control
const ToggleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  box-shadow: var(--box-shadow);
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  transition: transform 0.5s ease;
  
  ${ToggleButton}:hover & {
    transform: rotate(360deg);
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
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <IconWrapper>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle; 