'use client';
import React from 'react';
import styled from 'styled-components';
import { Heading2, Paragraph } from '../styles/Typography';


const ContactSection = styled.section`
  padding: 5rem 2rem 4rem;
  background-color: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.accent};
  border: 2px dashed ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.accent    
      : theme.colors.accent}; 
  
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: ${({ theme }) =>
  theme.title === 'dark'
    ? `0 12px 32px ${theme.colors.gold}30` // Roxo com opacidade
    : `0 10px 32px ${theme.colors.bordaSobre}80`}; 

`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.accent};
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.text}99;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 0 5px ${({ theme }) => theme.primary}60;
    }
  }

  button {
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Heading2>Entre em contato</Heading2>
      <Paragraph style={{ marginBottom: '1.5rem' }}>
        Email: <strong>contato@consultoradeestilo.com.br</strong>
      </Paragraph>
      <FormContainer>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nome" required />
          <input type="tel" placeholder="Telefone" required />
          <input type="email" placeholder="E-mail" required />
          <button type="submit">Agendar consultoria</button>
        </StyledForm>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
