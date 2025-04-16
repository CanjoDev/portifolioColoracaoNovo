'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../components/Container'; // caminho relativo
import { Heading, Paragraph } from '../styles/Typography';


const Section = styled.section`
  background: ${({ theme }) => theme.colors.accent};
  // color: ${({ theme }) => theme.textRealce};
  padding: 8rem 0 6rem;
`;

const HeroGrid = styled.div`
  display: flex;
  flex-direction: column; // Mobile: imagem depois texto (ordem DOM)
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse; // Desktop: texto → imagem
    align-items: center;
    justify-content: center;
  }
`;


const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${({ theme }) => theme.textRealce};
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 0.9rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 10px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.gold}70;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 6px 18px ${({ theme }) => theme.colors.softGreen}70;
  }
`;

const ModernImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 90vw; // responsivo para mobile
    width: 320px;
    height: auto;
    border-radius: 80% 28% 47% 40% / 37% 30% 70% 63%;
    object-fit: cover;

    box-shadow: ${({ theme }) =>
      theme.title === 'dark'
        ? `0 12px 32px ${theme.colors.primary}AA`
        : `0 10px 32px ${theme.colors.bordaSobre}AA`}; 

    transition: all 0.3s ease;
  }
`;





const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <HeroGrid>
        <ModernImageContainer>
          <Image
            src="/images/projetos.jpg"
            alt="Consultora"
            width={400}
            height={420}
            style={{ objectFit: 'cover' }}
            priority
          />
        </ModernImageContainer>


          <TextContent>
            <Heading
              as={motion.h1}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              
            >
              Descubra sua essência com a Coloração Pessoal 💫
            </Heading>

            <Paragraph
              as={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              
            >
            O que é visagismo
            Visagismo é um conjunto de técnicas onde eu buscarei analisar o seu formato de rosto. E com isso potencializarei a sua beleza e a mensagem que você quer transmitir. 
            Com isso farei uma análise completa analisando formato do rosto, cor da pele, feições e personalidade.
            É por meio do visagismos que farei a leitura dos teus traços, personalidade e o seu desejo de imagem (o que queres transmitir) utilizando recursos estéticos como maquiagem, corte de cabelo, coloração e penteado.
            O que é coloração 
            Cada ser humano tem um conjunto de características que nos tornam únicos.  Na coloração analisamos o subtom, o contraste e outras características. 
            E é por meio disso que chegaremos a sua cartela de cores. 
            São cerca de 100 cores que harmoniza com a sua pele e beleza. 
            Quando usamos cores que nos favorecem, amenizamos olheiras, linhas de expressão, e trazemos um aspecto de pele saudável (e se usamos cores que não nos valorizam, temos o efeito oposto).
            Ao descobrir sua cartela você saberá quais são as cores de roupas ideias para você, assim como cores de cabelo, acessórios, maquiagens e esmaltes.
            </Paragraph>
          <CTAButton
              href="/catalogo.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Baixar catálogo de cores
            </CTAButton>
          </TextContent>

        
        </HeroGrid>
      </Container>
    </Section>
  );
};

export default Hero;
