'use client';
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Heading, Subheading, Paragraph } from '../styles/Typography';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 0; /* aumentado de 2rem 0 para 6rem 0 */
  background: ${({ theme }) => theme.beige};
  color: ${({ theme }) => theme.text};
`;


const SobreGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
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
    border-radius: 32% 68% 67% 33% / 37% 30% 70% 63%; /* Corte moderno */
    object-fit: cover;
       box-shadow: ${({ theme }) =>
      theme.title === 'dark'
        ? `0 12px 32px ${theme.colors.gold}AA` // Roxo com opacidade
        : `0 14px 32px ${theme.colors.bordaSobreMarron}CC`}; 

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
          Sou consultora de cores e de Visagismo. Especialista no Método Visagismo Espelhado, método em que crio simulações altamente fidedignas das minhas clientes com cortes e cores de cabelos ideias para a beleza de cada uma. 
          Além disso estou concluindo a graduação de Publicidade e Propaganda e sou sócia da Indicare, empresa especializada em consultoria comercial.
          Sempre fui apaixonada pela moda e comportamento humano. Hoje tenho como propósito revelar ao mundo o poder que o autoconhecimento tem para nos tornar únicos e autênticos. E você está a um passo de descobri também! 
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
