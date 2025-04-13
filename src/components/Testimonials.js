/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaLinkedin } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to top, var(--dark-secondary), var(--dark-color));
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  color: var(--light-color);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--gradient-primary);
  }
`;

const SectionDesc = styled.p`
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialsSlider = styled.div`
  display: flex;
  overflow: hidden;
`;

const TestimonialSlide = styled(motion.div)`
  width: 100%;
  flex-shrink: 0;
  padding: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  }
`;

const LinkedInBadge = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.8rem;
  color: #0077b5;
  display: flex;
  align-items: center;
`;

const QuoteIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  opacity: 0.5;
  margin-bottom: 1rem;
`;

const TestimonialContent = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--light-color);
  margin-bottom: 0.2rem;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: var(--primary-color);
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
`;

const NavButton = styled.button`
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
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
                transition={{ duration: 0.5 }}
                style={{ 
                  display: currentIndex === index ? 'block' : 'none'
                }}
              >
                <TestimonialCard>
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