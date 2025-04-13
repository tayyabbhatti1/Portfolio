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
    background: radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.15), transparent 50%);
    z-index: 0;
  }
`;

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--light-color);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
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
    }
  }
`;

const ContactForm = styled.form`
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--light-color);
`;

const InputGroup = styled.div`
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
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light-color);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light-color);
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  display: inline-block;
  border: none;
  box-shadow: var(--box-shadow);
  width: 100%;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  background-color: ${props => props.success ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  color: ${props => props.success ? 'var(--success-color)' : '#ef4444'};
  border: 1px solid ${props => props.success ? 'rgba(16, 185, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)'};
`;

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
        <SectionHeader>
          <SectionTitle>Contact Me</SectionTitle>
          <SectionDesc>
            Feel free to reach out to me for any questions or opportunities.
          </SectionDesc>
        </SectionHeader>
        
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Location</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Location</InfoLabel>
                <InfoText>Lahore, Punjab, Pakistan</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactInfo>
            <InfoTitle>Email</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>
                  <a href="mailto:tayyabmuhammad743@gmail.com">tayyabmuhammad743@gmail.com</a>
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactInfo>
            <InfoTitle>Phone</InfoTitle>
            <InfoItem>
              <InfoIcon>
                <FaPhoneAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
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
        >
          <FormTitle>Send Message</FormTitle>
          <InputGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </InputGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            <FaPaperPlane />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {status.success && (
            <StatusMessage success>
              {status.message}
            </StatusMessage>
          )}
          
          {status.error && (
            <StatusMessage error>
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 