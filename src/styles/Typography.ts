import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.23;
  margin-bottom: 1.5rem;
  max-width: 100ch;
  // color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
