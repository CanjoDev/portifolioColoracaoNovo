'use client';

import React from 'react';
import styled from 'styled-components';
import Container from './Container';
// import { Subheading, Paragraph } from '../styles/Typography';
import { Heading, Subheading, Paragraph } from '../styles/Typography';


import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const PortifolioGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Projeto = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FotoProjeto = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 320px;
    height: auto;
    border-radius: 32% 68% 15% 33% / 37% 30% 70% 63%;
    object-fit: cover;
    box-shadow: ${({ theme }) =>
      theme.title === 'dark'
        ? `0 12px 32px ${theme.colors.bordViolet}AA`
        : `0 12px 32px ${theme.colors.bordViolet}CC`};
  }
`;

const projects = [
  {
    img: '/images/kaiGramado.jpg',
    texto: `O que é visagismo?

Visagismo é um conjunto de técnicas que analisa o formato do seu rosto, sua pele, feições e personalidade com o objetivo de valorizar sua beleza natural e alinhar sua imagem com a mensagem que você deseja transmitir ao mundo.

Muito além da estética, o visagismo é uma ferramenta de autoconhecimento e empoderamento. Através de uma análise personalizada, levo em conta sua essência, estilo de vida e objetivos de imagem para construir uma identidade visual coerente com quem você é — e com quem deseja se tornar.

Com base nessa leitura profunda, aplico recursos estéticos como maquiagem, corte de cabelo, coloração e penteado, criando uma imagem harmônica, autêntica e intencional, que respeita seus traços, valoriza seus pontos fortes e expressa sua singularidade de forma única.`,
  },
  {
    img: '/images/kaiOmg.jpg',
    texto: 'Transformação de imagem para tons frios com abordagem emocional e estilística.',
  },
];

const Portifolio = () => {
  return (
    <Section id="visagimos">
      <Container>
        <Subheading style={{ textAlign: 'left', marginBottom: '2rem' }}>Portfólio</Subheading>
        <PortifolioGrid>
          {projects.map((item, index) => (
            <Projeto key={index} $reverse={index % 2 !== 0}>
              <FotoProjeto>
                <img src={item.img} alt={`Projeto ${index + 1}`} />
              </FotoProjeto>
              <Paragraph
                as={motion.p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {item.texto}
              </Paragraph>
            </Projeto>
          ))}
        </PortifolioGrid>
      </Container>
    </Section>
  );
};

export default Portifolio;
