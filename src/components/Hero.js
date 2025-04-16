/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDatabase, FaChartBar, FaServer, FaLaptopCode } from 'react-icons/fa';

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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${props => props.bg || 'var(--gradient-primary)'};
  color: var(--light-color);
  border-radius: ${props => props.rounded ? '50%' : '12px'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  
  svg {
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
  }
`;

const DataLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  transform-origin: left;
  z-index: 0;
  box-shadow: 0 0 10px var(--primary-color);
`;

const CodeBlock = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 34px;
  background: rgba(30, 41, 59, 0.9);
  border-radius: 6px;
  padding: 6px 10px;
  font-family: 'Consolas', monospace;
  font-size: 12px;
  color: #10b981;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(72, 187, 120, 0.3);
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 45%,
      rgba(16, 185, 129, 0.05) 45%,
      rgba(16, 185, 129, 0.05) 55%,
      transparent 55%,
      transparent
    );
    animation: scanLine 3s linear infinite;
  }
  
  @keyframes scanLine {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const BinaryText = styled(motion.div)`
  position: absolute;
  font-family: 'Consolas', monospace;
  font-size: ${props => props.size || '12px'};
  color: rgba(99, 102, 241, 0.15);
  white-space: nowrap;
  pointer-events: none;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '5px'};
  height: ${props => props.size || '5px'};
  background: ${props => props.color || 'rgba(99, 102, 241, 0.3)'};
  border-radius: 50%;
  filter: blur(1px);
`;

const GlowingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '15px'};
  height: ${props => props.size || '15px'};
  border-radius: 50%;
  background: ${props => props.color || 'rgba(99, 102, 241, 0.2)'};
  filter: blur(5px);
`;

const TypingContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: var(--primary-color);
  animation: blink 1s step-end infinite;
  margin-left: 5px;
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const AnimatedCircuit = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const CircuitLine = styled(motion.div)`
  position: absolute;
  background: ${props => props.color || 'rgba(99, 102, 241, 0.2)'};
  height: ${props => props.height || '2px'};
  width: ${props => props.width || '100px'};
  transform-origin: left center;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.nodeSize || '6px'};
    height: ${props => props.nodeSize || '6px'};
    border-radius: 50%;
    background: ${props => props.nodeColor || 'rgba(99, 102, 241, 0.7)'};
    box-shadow: 0 0 10px ${props => props.nodeColor || 'rgba(99, 102, 241, 0.7)'};
  }
`;

const TechWord = styled(motion.div)`
  position: absolute;
  font-family: 'Consolas', monospace;
  font-size: 12px;
  color: ${props => props.color || 'rgba(99, 102, 241, 0.5)'};
  background: rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const LightBeam = styled(motion.div)`
  position: absolute;
  width: 2px;
  background: ${props => props.color || 'rgba(99, 102, 241, 0.5)'};
  transform-origin: bottom;
  filter: blur(1px);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.beamColor || 'rgba(99, 102, 241, 0.9)'};
    box-shadow: 0 0 15px 5px ${props => props.beamColor || 'rgba(99, 102, 241, 0.5)'};
  }
`;

const Hexagon = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '30px'};
  height: calc(${props => props.size || '30px'} * 0.866);
  background: ${props => props.bg || 'rgba(99, 102, 241, 0.1)'};
  border: 1px solid ${props => props.borderColor || 'rgba(99, 102, 241, 0.3)'};
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: calc(${props => props.size || '30px'} / 2) solid transparent;
    border-right: calc(${props => props.size || '30px'} / 2) solid transparent;
  }
  
  &:before {
    bottom: 100%;
    border-bottom: calc(${props => props.size || '30px'} * 0.433) solid ${props => props.bg || 'rgba(99, 102, 241, 0.1)'};
  }
  
  &:after {
    top: 100%;
    border-top: calc(${props => props.size || '30px'} * 0.433) solid ${props => props.bg || 'rgba(99, 102, 241, 0.1)'};
  }
`;

const ProfileRing = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid rgba(99, 102, 241, 0.7);
  border-left: 4px solid rgba(16, 185, 129, 0.7);
  border-bottom: 4px solid rgba(245, 158, 11, 0.7);
  border-right: 4px solid rgba(239, 68, 68, 0.7);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const FloatingText3D = styled(motion.div)`
  position: absolute;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: ${props => props.size || '18px'};
  color: ${props => props.color || 'var(--primary-color)'};
  text-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.3),
    0 0 20px ${props => props.glowColor || 'rgba(99, 102, 241, 0.5)'};
  white-space: nowrap;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const DotGrid = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 10}, 1fr);
  grid-template-rows: repeat(${props => props.rows || 10}, 1fr);
  opacity: 0.3;
`;

const Dot = styled(motion.div)`
  width: 2px;
  height: 2px;
  background-color: ${props => props.color || 'rgba(99, 102, 241, 0.5)'};
  border-radius: 50%;
`;

// Functions to generate tech-themed elements
const generateCircuitLines = (count = 15) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    width: `${Math.random() * 100 + 50}px`,
    height: `${1 + Math.random() * 2}px`,
    rotation: Math.random() * 360,
    color: i % 5 === 0 
      ? 'rgba(99, 102, 241, 0.3)' 
      : i % 5 === 1 
        ? 'rgba(16, 185, 129, 0.3)' 
        : i % 5 === 2
          ? 'rgba(245, 158, 11, 0.3)'
          : i % 5 === 3
            ? 'rgba(239, 68, 68, 0.3)'
            : 'rgba(139, 92, 246, 0.3)',
    nodeColor: i % 5 === 0 
      ? 'rgba(99, 102, 241, 0.7)' 
      : i % 5 === 1 
        ? 'rgba(16, 185, 129, 0.7)' 
        : i % 5 === 2
          ? 'rgba(245, 158, 11, 0.7)'
          : i % 5 === 3
            ? 'rgba(239, 68, 68, 0.7)'
            : 'rgba(139, 92, 246, 0.7)',
    duration: 3 + Math.random() * 5
  }));
};

const generateTechWords = () => {
  const words = [
    'CRM', 'Siebel', 'Analytics', 'Data', 'SQL', 
    'AI', 'API', 'Cloud', 'Python', 'ETL', 
    'Dashboard', 'Metrics', 'Insights', 'ROI', 'KPI'
  ];
  
  return words.map((word, i) => ({
    id: i,
    word,
    x: `${Math.random() * 80 + 10}%`,
    y: `${Math.random() * 80 + 10}%`,
    color: i % 5 === 0 
      ? 'rgba(99, 102, 241, 0.8)' 
      : i % 5 === 1 
        ? 'rgba(16, 185, 129, 0.8)' 
        : i % 5 === 2
          ? 'rgba(245, 158, 11, 0.8)'
          : i % 5 === 3
            ? 'rgba(239, 68, 68, 0.8)'
            : 'rgba(139, 92, 246, 0.8)',
    delay: i * 0.2,
    duration: 3 + Math.random() * 7
  }));
};

const generateLightBeams = (count = 8) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    height: `${50 + Math.random() * 150}px`,
    color: i % 4 === 0 
      ? 'rgba(99, 102, 241, 0.3)' 
      : i % 4 === 1 
        ? 'rgba(16, 185, 129, 0.3)' 
        : i % 4 === 2
          ? 'rgba(245, 158, 11, 0.3)'
          : 'rgba(239, 68, 68, 0.3)',
    beamColor: i % 4 === 0 
      ? 'rgba(99, 102, 241, 0.7)' 
      : i % 4 === 1 
        ? 'rgba(16, 185, 129, 0.7)' 
        : i % 4 === 2
          ? 'rgba(245, 158, 11, 0.7)'
          : 'rgba(239, 68, 68, 0.7)',
    delay: i * 0.3,
    duration: 2 + Math.random() * 3
  }));
};

const generateHexagons = (count = 10) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 90 + 5}%`,
    y: `${Math.random() * 90 + 5}%`,
    size: `${15 + Math.random() * 25}px`,
    rotation: Math.random() * 30,
    bg: i % 4 === 0 
      ? 'rgba(99, 102, 241, 0.05)' 
      : i % 4 === 1 
        ? 'rgba(16, 185, 129, 0.05)' 
        : i % 4 === 2
          ? 'rgba(245, 158, 11, 0.05)'
          : 'rgba(239, 68, 68, 0.05)',
    borderColor: i % 4 === 0 
      ? 'rgba(99, 102, 241, 0.3)' 
      : i % 4 === 1 
        ? 'rgba(16, 185, 129, 0.3)' 
        : i % 4 === 2
          ? 'rgba(245, 158, 11, 0.3)'
          : 'rgba(239, 68, 68, 0.3)',
    delay: i * 0.15,
    duration: 20 + Math.random() * 10
  }));
};

const Hero = () => {
  // Binary text to display in the background
  const binaryString1 = "10101011010101101010110101011010101101";
  const binaryString2 = "01101001011010010110100101101001011010";
  
  // Create refs for animations
  const containerRef = useRef(null);
  
  // Text for typing animation
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Muhammad Tayyab";
  
  // Create typing animation effect
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText]);
  
  // Generate tech animation elements
  const circuitLines = generateCircuitLines(15);
  const techWords = generateTechWords();
  const lightBeams = generateLightBeams(8);
  const hexagons = generateHexagons(10);
  
  // Animation variants for elements
  const floatingIconVariants = {
    hover: {
      y: -10,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    },
    initial: { 
      opacity: 0, 
      y: 20,
      x: -20
    },
    animate: i => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + (i * 0.1)
      }
    })
  };
  
  const dataLineVariants = {
    initial: { 
      scaleX: 0,
      opacity: 0
    },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5
      }
    }
  };
  
  const codeBlockVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8 + (i * 0.2)
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };
  
  const pulseAnimation = {
    initial: {
      scale: 0.8,
      opacity: 0.3
    },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const circuitLineVariants = {
    initial: {
      opacity: 0,
      scaleX: 0
    },
    animate: i => ({
      opacity: [0, 1, 1, 0],
      scaleX: [0, 1, 1, 1], 
      transition: {
        duration: 3 + (i * 0.5),
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.1, 0.9, 1],
        delay: i * 0.2
      }
    })
  };
  
  const lightBeamVariants = {
    initial: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "bottom"
    },
    animate: i => ({
      opacity: [0, 0.8, 0],
      scaleY: [0, 1, 1],
      transition: {
        duration: 2 + (i * 0.3),
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };
  
  const hexagonVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: 0
    },
    animate: i => ({
      opacity: [0, 0.7, 0],
      scale: [0.5, 1, 0.5],
      rotate: [0, i % 2 === 0 ? 30 : -30],
      transition: {
        duration: 10 + (i * 0.5),
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.2,
        times: [0, 0.5, 1]
      }
    })
  };
  
  const techWordVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: i => ({
      opacity: [0, 1, 0],
      y: [20, 0, -20],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };
  
  const profileRingsAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: `${Math.random() * 6 + 2}px`,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: i % 3 === 0 
      ? 'rgba(99, 102, 241, 0.3)' 
      : i % 3 === 1 
        ? 'rgba(16, 185, 129, 0.3)' 
        : 'rgba(245, 158, 11, 0.3)',
    duration: Math.random() * 20 + 10
  }));
  
  const glowingCircles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: `${Math.random() * 20 + 10}px`,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: i % 4 === 0 
      ? 'rgba(99, 102, 241, 0.15)' 
      : i % 4 === 1 
        ? 'rgba(16, 185, 129, 0.15)' 
        : i % 4 === 2
          ? 'rgba(245, 158, 11, 0.15)'
          : 'rgba(239, 68, 68, 0.15)',
    duration: Math.random() * 15 + 10
  }));
  
  return (
    <HeroSection id="home" ref={containerRef}>
      {/* Background animations */}
      <AnimatedBackground>
        {particles.map((particle) => (
          <Particle
            key={`particle-${particle.id}`}
            size={particle.size}
            color={particle.color}
            style={{ top: particle.y, left: particle.x }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: particle.duration,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {glowingCircles.map((circle) => (
          <GlowingCircle
            key={`circle-${circle.id}`}
            size={circle.size}
            color={circle.color}
            style={{ top: circle.y, left: circle.x }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: circle.duration,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <BinaryText
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{ top: '15%', left: '5%' }}
          size="14px"
        >
          {binaryString1}
        </BinaryText>
        <BinaryText
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{ top: '35%', right: '8%' }}
          size="14px"
        >
          {binaryString2}
        </BinaryText>
        <BinaryText
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{ bottom: '20%', left: '10%' }}
          size="14px"
        >
          {binaryString1}
        </BinaryText>
        
        {/* Circuit animations */}
        <AnimatedCircuit>
          {circuitLines.map((line, i) => (
            <CircuitLine
              key={`circuit-${line.id}`}
              color={line.color}
              width={line.width}
              height={line.height}
              nodeColor={line.nodeColor}
              style={{ 
                top: line.y, 
                left: line.x,
                transform: `rotate(${line.rotation}deg)`
              }}
              custom={i}
              initial="initial"
              animate="animate"
              variants={circuitLineVariants}
            />
          ))}
          
          {lightBeams.map((beam, i) => (
            <LightBeam
              key={`beam-${beam.id}`}
              color={beam.color}
              beamColor={beam.beamColor}
              style={{ 
                bottom: 0,
                left: beam.x,
                height: beam.height
              }}
              custom={i}
              initial="initial"
              animate="animate"
              variants={lightBeamVariants}
            />
          ))}
          
          {hexagons.map((hex, i) => (
            <Hexagon
              key={`hex-${hex.id}`}
              bg={hex.bg}
              borderColor={hex.borderColor}
              size={hex.size}
              style={{ 
                top: hex.y, 
                left: hex.x,
                transform: `rotate(${hex.rotation}deg)`
              }}
              custom={i}
              initial="initial"
              animate="animate"
              variants={hexagonVariants}
            />
          ))}
          
          {techWords.map((word, i) => (
            <TechWord
              key={`word-${word.id}`}
              color={word.color}
              style={{ 
                top: word.y, 
                left: word.x
              }}
              custom={i}
              initial="initial"
              animate="animate"
              variants={techWordVariants}
            >
              {word.word}
            </TechWord>
          ))}
        </AnimatedCircuit>
      </AnimatedBackground>
      
      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SubHeading>Hello, I'm</SubHeading>
            <Heading>
              <TypingContainer>
                {displayedText}
                {!isTypingComplete && <Cursor />}
              </TypingContainer>
            </Heading>
            <Description>
              A passionate Siebel CRM Developer with expertise in Data Analytics. 
              I specialize in building robust CRM solutions and delivering data-driven insights that drive business value.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton 
                href="#projects"
                as={motion.a}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </PrimaryButton>
              <SecondaryButton 
                href="#contact"
                as={motion.a}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </SecondaryButton>
            </ButtonGroup>
            
            <SocialIcons>
              <SocialIcon 
                href="https://github.com/tayyabbhatti1" 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ 
                  y: -8,
                  backgroundColor: "rgba(31, 41, 55, 0.9)",
                  borderColor: "var(--primary-color)",
                  color: "var(--primary-color)",
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/muhammad-tayyab7/" 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ 
                  y: -8,
                  backgroundColor: "rgba(31, 41, 55, 0.9)",
                  borderColor: "var(--primary-color)",
                  color: "var(--primary-color)",
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                as={motion.a}
                whileHover={{ 
                  y: -8,
                  backgroundColor: "rgba(31, 41, 55, 0.9)",
                  borderColor: "var(--primary-color)",
                  color: "var(--primary-color)",
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
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
          {/* Code icon animation */}
          <FloatingIcon 
            bg="linear-gradient(135deg, #6366f1, #4f46e5)"
            rounded={false}
            style={{ top: '-10%', right: '30%' }}
            custom={1}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={floatingIconVariants}
          >
            <FaCode />
          </FloatingIcon>
          
          {/* Database icon animation */}
          <FloatingIcon 
            bg="linear-gradient(135deg, #10b981, #059669)"
            rounded={true}
            style={{ top: '20%', right: '-5%' }}
            custom={2}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={floatingIconVariants}
          >
            <FaDatabase />
          </FloatingIcon>
          
          {/* Chart icon animation */}
          <FloatingIcon 
            bg="linear-gradient(135deg, #f59e0b, #d97706)"
            rounded={false}
            style={{ bottom: '10%', right: '10%' }}
            custom={3}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={floatingIconVariants}
          >
            <FaChartBar />
          </FloatingIcon>
          
          {/* Server icon animation */}
          <FloatingIcon 
            bg="linear-gradient(135deg, #ef4444, #dc2626)"
            rounded={true}
            style={{ bottom: '30%', left: '-5%' }}
            custom={4}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={floatingIconVariants}
          >
            <FaServer />
          </FloatingIcon>
          
          {/* Laptop Code icon animation */}
          <FloatingIcon 
            bg="linear-gradient(135deg, #8b5cf6, #7c3aed)"
            rounded={false}
            style={{ top: '25%', left: '5%' }}
            custom={5}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={floatingIconVariants}
          >
            <FaLaptopCode />
          </FloatingIcon>
          
          {/* Data line animations */}
          <DataLine 
            style={{ top: '0%', right: '28%', width: '80px', transform: 'rotate(45deg)' }}
            initial="initial"
            animate="animate"
            variants={dataLineVariants}
          />
          
          <DataLine 
            style={{ top: '28%', right: '0%', width: '80px', transform: 'rotate(0deg)' }}
            initial="initial"
            animate="animate"
            variants={dataLineVariants}
          />
          
          <DataLine 
            style={{ bottom: '20%', right: '12%', width: '70px', transform: 'rotate(-45deg)' }}
            initial="initial"
            animate="animate"
            variants={dataLineVariants}
          />
          
          <DataLine 
            style={{ bottom: '35%', left: '0%', width: '70px', transform: 'rotate(0deg)' }}
            initial="initial"
            animate="animate"
            variants={dataLineVariants}
          />
          
          <DataLine 
            style={{ top: '30%', left: '8%', width: '70px', transform: 'rotate(45deg)' }}
            initial="initial"
            animate="animate"
            variants={dataLineVariants}
          />
          
          {/* Code blocks */}
          <CodeBlock
            style={{ top: '5%', left: '15%' }}
            custom={1}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={codeBlockVariants}
          >
            getData()
          </CodeBlock>
          
          <CodeBlock
            style={{ bottom: '5%', left: '25%' }}
            custom={2}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={codeBlockVariants}
          >
            analyze()
          </CodeBlock>
          
          {/* Profile rings */}
          <ProfileRing
            style={{ 
              width: 'calc(100% + 30px)', 
              height: 'calc(100% + 30px)',
              top: '-15px',
              left: '-15px'
            }}
            animate="animate"
            variants={profileRingsAnimation}
          />
          
          <ProfileRing
            style={{ 
              width: 'calc(100% + 60px)', 
              height: 'calc(100% + 60px)',
              top: '-30px',
              left: '-30px',
              borderWidth: '3px'
            }}
            animate={{ 
              rotate: -360,
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
          
          <motion.div
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
            style={{ 
              position: 'absolute', 
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              zIndex: 0
            }}
          />
          
          <ProfileCircle>
            <ProfileContent>
              <img src="/Profile.jpeg" alt="Muhammad Tayyab" />
            </ProfileContent>
          </ProfileCircle>
          
          {/* 3D Text elements */}
          <FloatingText3D
            style={{ top: '-20%', right: '10%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: [0, 10, 0, -10, 0],
              rotateY: [0, 15, 0, -15, 0]
            }}
            transition={{ 
              duration: 8, 
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            color="rgba(16, 185, 129, 0.9)"
            glowColor="rgba(16, 185, 129, 0.5)"
          >
            Data Expert
          </FloatingText3D>
          
          <FloatingText3D
            style={{ bottom: '-15%', left: '5%' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: [0, -10, 0, 10, 0],
              rotateY: [0, -15, 0, 15, 0]
            }}
            transition={{ 
              duration: 8, 
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            color="rgba(99, 102, 241, 0.9)"
            glowColor="rgba(99, 102, 241, 0.5)"
          >
            CRM Developer
          </FloatingText3D>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 