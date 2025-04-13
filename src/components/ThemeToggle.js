/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
      document.body.classList.add('light-theme');
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
    <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className="theme-toggle-icon">
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default ThemeToggle; 