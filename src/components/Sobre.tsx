'use client';
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Subheading, Paragraph } from '../styles/Typography';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background}; // Usando cor clara base do tema
  color: ${({ theme }) => theme.colors.text};
`;

const SobreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FotoConsultora = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 320px;
    height: auto;
    border-radius: 32% 68% 67% 33% / 37% 30% 70% 63%;
    object-fit: cover;
    box-shadow: ${({ theme }) =>
      theme.title === 'dark'
        ? `0 12px 32px ${theme.colors.text}AA`
        : `0 14px 32px ${theme.colors.text}BB`};
    transition: all 0.3s ease;
  }
`;

const Sobre = () => {
  return (
    <Section id="sobre">
      <Container>
        <Subheading>Sobre mim</Subheading>
        <SobreGrid>
          <Paragraph
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sou consultora de cores e de Visagismo. Especialista no Método Visagismo Espelhado, onde crio simulações altamente fiéis com cortes e cores ideais para cada beleza única.
            <br /><br />
            Estou me formando em Publicidade e Propaganda e sou sócia da Indicare, especializada em consultoria comercial.
            <br /><br />
            Apaixonada por moda e comportamento humano, meu propósito é mostrar o poder do autoconhecimento para revelar a autenticidade de cada pessoa.
          </Paragraph>

          <FotoConsultora>
            <img src="/images/consultora.jpg" alt="Consultora" />
          </FotoConsultora>
        </SobreGrid>
      </Container>
    </Section>
  );
};

export default Sobre;
