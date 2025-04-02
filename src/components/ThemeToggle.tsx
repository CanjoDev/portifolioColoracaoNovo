
'use client';

import React, { useContext } from 'react';
import styled from 'styled-components';
import { useThemeToggle } from '../theme/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from 'styled-components';

const ToggleWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 50%;
  padding: 0.9rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const ThemeToggle = () => {
  const toggle = useThemeToggle();
  const theme = useContext(ThemeContext);
  const isDark = theme.background === '#0D0D0D';

  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </ToggleButton>
    </ToggleWrapper>
  );
};
