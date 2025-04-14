/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--dark-color) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.3), transparent 50%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(249, 115, 22, 0.2), transparent 50%);
    z-index: 0;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  color: var(--light-color);
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 3px;
  }
`;

const SectionDesc = styled.p`
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 1.5rem auto 0;
  line-height: 1.7;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--light-color);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--light-color);
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  
  a {
    color: var(--text-muted);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(18, 18, 29, 0.7);
  backdrop-filter: blur(16px);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--light-color);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const InputGroup = styled(motion.div)`
  opacity: 100;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light-color);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    background-color: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light-color);
  resize: vertical;
  min-height: 180px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    background-color: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.2rem 2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: none;
  box-shadow: 0 8px 15px rgba(99, 102, 241, 0.3);
  width: 100%;
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(99, 102, 241, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 1.2rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  font-size: 1rem;
  text-align: center;
  background-color: ${props => props.success ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'};
  color: ${props => props.success ? 'var(--success-color)' : '#ef4444'};
  border: 1px solid ${props => props.success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
  backdrop-filter: blur(4px);
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: false, error: false, message: '' });
  const formRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: false, error: false, message: '' });
    
    // Use EmailJS to send emails
    emailjs.sendForm(
      'service_6a2l2s5', // Replace with your EmailJS service ID
      'template_pwznbph', // Replace with your EmailJS template ID
      formRef.current,
      'B3HqPLetBPzKSx0no' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitting(false);
        setStatus({ 
          success: true, 
          error: false, 
          message: 'Thanks for your message! I will get back to you soon.' 
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setIsSubmitting(false);
        setStatus({ 
          success: false, 
          error: true, 
          message: 'Something went wrong. Please try again later or contact me directly via email.' 
        });
      });
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SectionTitle>Contact Me</SectionTitle>
          <SectionDesc>
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </SectionDesc>
        </SectionHeader>
        
        <ContactGrid>
          <ContactInfo 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InfoTitle>Location</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Address</InfoLabel>
                <InfoText>Lahore, Punjab, Pakistan</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactInfo
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoTitle>Email</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Mail Me</InfoLabel>
                <InfoText>
                  <a href="mailto:tayyabmuhammad743@gmail.com">tayyabmuhammad743@gmail.com</a>
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactInfo
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InfoTitle>Phone</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaPhoneAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Call Me</InfoLabel>
                <InfoText>
                  <a href="tel:+923390002105">+92 339 000 2105</a>
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
        </ContactGrid>
        
        <ContactForm
          ref={formRef}
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <FormTitle>Send Me A Message</FormTitle>
          
          <FormRow>
            <InputGroup variants={fadeIn}>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </InputGroup>
            
            <InputGroup variants={fadeIn}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </InputGroup>
          </FormRow>
          
          <InputGroup variants={fadeIn}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="How can I help you?" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <InputGroup variants={fadeIn}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea 
              id="message" 
              name="message" 
              placeholder="Write your message here..." 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            variants={fadeIn}
          >
            <FaPaperPlane />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {status.success && (
            <StatusMessage 
              success
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {status.message}
            </StatusMessage>
          )}
          
          {status.error && (
            <StatusMessage 
              error
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 