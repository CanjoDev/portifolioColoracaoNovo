// styles/Typography.ts
import styled from 'styled-components';

// Fontes para uso via theme
export const fontFamily = {
  heading: "'Safira March', serif",
  subheading: "'Safira March', serif",
  body: "'Montserrat', sans-serif",
  button: "'Montserrat', sans-serif"
};

// Objeto para usar nos temas
export const Typography = {
  heading: fontFamily.heading,
  subheading: fontFamily.subheading,
  body: fontFamily.body,
  button: fontFamily.button,
};

// Componentes tipográficos estilizados com nomes claros
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  font-family: ${fontFamily.heading};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  font-family: ${fontFamily.subheading};

  @media (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 65ch;
  font-family: ${fontFamily.body};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
