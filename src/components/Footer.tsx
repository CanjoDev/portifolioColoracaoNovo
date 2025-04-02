import React from 'react';
import styled from 'styled-components';
import {
  InstagramLogo,
  WhatsappLogo,
  LinkedinLogo,
  TiktokLogo,
  // EmailLogo
} from 'phosphor-react';
import {Heading2, Paragraph } from '../styles/Typography';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.accent};
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Icon = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid #d4af37;
  background-color: transparent;
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background: linear-gradient(145deg, #e8c766, #c89f29);
    box-shadow: 0 0 12px rgba(253, 228, 35, 0.4);
    color: #1a1a1a;
    transform: scale(1.05);
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <Heading2>Siga nos nas redes sociais</Heading2>
      <IconRow>
        <Icon href="https://wa.me/SEUNUMERO" target="_blank">
          <WhatsappLogo size={26} weight="light" />
        </Icon>
        <Icon href="https://instagram.com/SEUPERFIL" target="_blank">
          <InstagramLogo size={26} weight="light" />
        </Icon>
        <Icon href="https://tiktok.com/@SEUPERFIL" target="_blank">
          <TiktokLogo size={26} weight="light" />
        </Icon>
        <Icon href="https://linkedin.com/in/SEULINKEDIN" target="_blank">
          <LinkedinLogo size={26} weight="light" />
        </Icon>
        {/* <Icon>
          <EmailLogo></EmailLogo>
        </Icon> */}
      </IconRow>
    </FooterContainer>
  );
};

export default Footer;
