/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 6rem 0;
  background-color: var(--secondary-color);
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
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const SectionDesc = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 700px;
  margin: 0 auto;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)``;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ContactTextContent = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: var(--text-color);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--light-color);
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: #4a2ebe;
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  background-color: #f44336;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
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
        
        <ContactWrapper>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactTextContent>
                <ContactTitle>Location</ContactTitle>
                <ContactText>Lahore, Punjab, Pakistan</ContactText>
              </ContactTextContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactTextContent>
                <ContactTitle>Email</ContactTitle>
                <ContactLink href="mailto:tayyabmuhammad743@gmail.com">tayyabmuhammad743@gmail.com</ContactLink>
              </ContactTextContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <ContactTextContent>
                <ContactTitle>Phone</ContactTitle>
                <ContactLink href="tel:+923390002105">+92 339 000 2105</ContactLink>
              </ContactTextContent>
            </ContactInfoItem>
          </ContactInfo>
          
          <ContactForm
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormRow>
              <FormGroup>
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
              </FormGroup>
              
              <FormGroup>
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
              </FormGroup>
            </FormRow>
            
            <FormGroup>
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
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {status.success && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status.message}
              </SuccessMessage>
            )}
            
            {status.error && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status.message}
              </ErrorMessage>
            )}
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 