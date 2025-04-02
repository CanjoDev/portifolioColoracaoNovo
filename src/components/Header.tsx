import React from 'react';
import styled from 'styled-components';
import {
  House,
  UserCircle,
  Briefcase,
  Envelope
} from 'phosphor-react';
import { Heading, Subheading, Paragraph } from '../styles/Typography';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.0rem 2rem;
  backdrop-filter: blur(6px);
  background-color: ${({ theme }) => theme.headerBackground};
  border-bottom: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

    box-shadow: 0 2px 12px rgba(46, 139, 87, 0.08); /* luz esverdeada suave */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


const Logo = styled.h1`
  font-size: 1.6rem;
  // font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }

  svg {
    transition: color 0.3s ease;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Coloração Pessoal</Logo>

      <Nav>
        <NavLink href="#home">
          <House size={20} weight="light" />
          Início
        </NavLink>
        <NavLink href="#sobre">
          <UserCircle size={20} weight="light" />
          Sobre
        </NavLink>
        <NavLink href="#portfolio">
          <Briefcase size={20} weight="light" />
          Portfólio
        </NavLink>
        <NavLink href="#contact">
          <Envelope size={20} weight="light" />
          Contato
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
