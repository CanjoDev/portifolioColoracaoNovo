// styles/Typography.ts
import styled from 'styled-components';

// Fontes para uso via theme
export const Typography = {
  fontFamily: {
    heading: "'Sora', sans-serif",
    subheading: "'Sora', sans-serif",
    body: "'Inter', sans-serif",
    button: "'Inter', sans-serif"
  }
};

// Componentes tipográficos estilizados com nomes claros
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  font-family: ${Typography.fontFamily.heading};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  font-family: ${Typography.fontFamily.subheading};

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
  font-family: ${Typography.fontFamily.body};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;