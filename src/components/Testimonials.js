/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaLinkedin } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: -5%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 5%;
    right: -10%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent 70%);
    z-index: 0;
  }
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: var(--light-color);
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const SectionDesc = styled.p`
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  margin-top: 1.5rem;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialsSlider = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 350px;
`;

const TestimonialSlide = styled(motion.div)`
  width: 100%;
  flex-shrink: 0;
  padding: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent 80%);
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

const LinkedInBadge = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  font-size: 1.8rem;
  color: #0077b5;
  display: flex;
  align-items: center;
  z-index: 2;
  filter: drop-shadow(0 0 8px rgba(0, 119, 181, 0.4));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  opacity: 0.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TestimonialContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 2rem;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: auto;
  position: relative;
  z-index: 1;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-color);
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--light-color);
  margin-bottom: 0.3rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const AuthorRole = styled.p`
  font-size: 0.95rem;
  color: var(--primary-color);
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1.5rem;
`;

const NavButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
  
  svg {
    position: relative;
    z-index: 1;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonialData = [
    {
      id: 1,
      text: "Tayyab is a smartworker and an efficient resource. It was a pleasure working alongside him during our time together. He consistently demonstrated a strong work ethic and a keen willingness to learn. His dedication and contributions to our projects were truly commendable. Tayyab's ability to excel in his role and adapt to new challenges is a testament to his potential. I have no doubt that he will continue to do great work and make valuable contributions to any team he joins.",
      author: "Muhammad Tayyab Bashir",
      title: "Business Analyst at i2c Inc.",
      initials: "MTB"
    },
    {
      id: 2,
      text: "Mr. Muhammad Tayyab was my student during his under-graduate studies. I have found him very committed towards his studies. I wish him all the best for his future endeavors. May Allah Bless him with much more success.",
      author: "Muhammad Moin",
      title: "Computer Vision Engineer at T2D2",
      initials: "MM"
    },
    /*{
      id: 3,
      text: "Working with Muhammad on our banking module was exceptional. His deep knowledge of Siebel CRM and data analytics helped us optimize our processes significantly. He's collaborative, efficient, and highly skilled at implementing technical solutions that address real business needs.",
      author: "Omar Khan",
      title: "VP Technology at Allied Bank",
      initials: "OK"
    },*/
  ];
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <SectionHeader>
          <SectionTitle>Testimonials</SectionTitle>
          <SectionDesc>
            What my clients and colleagues say about my work on LinkedIn
          </SectionDesc>
        </SectionHeader>
        
        <TestimonialsWrapper>
          <TestimonialsSlider>
            {testimonialData.map((testimonial, index) => (
              <TestimonialSlide
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ 
                  display: currentIndex === index ? 'block' : 'none'
                }}
              >
                <TestimonialCard
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <LinkedInBadge>
                    <FaLinkedin />
                  </LinkedInBadge>
                  <TestimonialContent>
                    "{testimonial.text}"
                  </TestimonialContent>
                  <TestimonialAuthor>
                    <AuthorImage>
                      {testimonial.initials}
                    </AuthorImage>
                    <AuthorInfo>
                      <AuthorName>{testimonial.author}</AuthorName>
                      <AuthorRole>{testimonial.title}</AuthorRole>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              </TestimonialSlide>
            ))}
          </TestimonialsSlider>
          
          <SliderControls>
            <NavButton onClick={handlePrev} aria-label="Previous testimonial">
              <FaArrowLeft />
            </NavButton>
            <NavButton onClick={handleNext} aria-label="Next testimonial">
              <FaArrowRight />
            </NavButton>
          </SliderControls>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials; 