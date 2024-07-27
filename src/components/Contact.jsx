import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: transparent;
  width: 100%;
`;

const MainCard = styled(Card)`
  background-color: #000;
  color: #fff;
  width: 100%;
  max-width: 700px;
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.1rem;
    max-width: 110%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormLabel = styled.label`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #888;
    }
  }
`;

const ContactDetails = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Form submitted successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        form.reset();
      } else {
        toast.error('Check your internet connection and try again', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.error('An error occurred:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
      >
        <MainCard>
          <CardHeader>
            <Badge>Contact</Badge>
          </CardHeader>
          <CardContent>
            <SectionTitle>Send me a mail</SectionTitle>
            <p>
              I would love to hear from you! Whether you have a question about my work, a project proposal, or just want to say hi, feel free to reach out.
            </p> <br/>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="78ad7c90-e7c5-4991-b446-a61c5ada20b2" /> 
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  style={{ color: 'black' }}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email" 
                  id="email"
                  name="email"
                  style={{ color: 'black' }}
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  style={{ color: 'black' }}
                  placeholder="Your message here..."
                  required
                />
              </FormGroup>
              <div className="h-captcha" style={{ display: 'flex', justifyContent: 'center' }} data-captcha="true"></div>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
            </form>
            <ContactDetails>
              <p>Email: elanchandru2@gmail.com</p>
              <p>Phone: +91-877-862-2935</p>
            </ContactDetails>
            <SocialLinks>
              <a href="https://wa.me/+918778622935" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://github.com/elanchandru2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/chandru-e-113b8b2a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:elanchandru2@gmail.com"><FaEnvelope /></a>
            </SocialLinks>
          </CardContent>
        </MainCard>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </Container>
  );
};

export default Contact;
