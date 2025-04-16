import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Heading, Subheading, Paragraph } from '../styles/Typography';

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.heading};

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.div)`
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.typography.subheading};
`;

const BenefitList = styled.ul`
  font-size: 0.95rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.typography.body};
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  font-family: ${({ theme }) => theme.typography.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ComboColoracao = () => {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Combos de Coloração Pessoal
      </Title>
      <Grid>
        <Card whileHover={{ scale: 1.03 }}>
          <div>
            <CardTitle>Coloração Básico</CardTitle>
            <BenefitList>
              <li>Cartela Digital com + de 100 cores</li>
              <li>Explicação em vídeo da sua cartela</li>
              <li>Dossiê com harmonias e combinações</li>
              <li>Dicas de maquiagem, esmaltes e acessórios</li>
              <li>Indicação de cabelo ideal da estação</li>
              <li>15 dias de suporte via WhatsApp</li>
            </BenefitList>
          </div>
          <div>
            <Price>R$ 97,00</Price>
            <Button>Contratar Combo</Button>
          </div>
        </Card>

        <Card whileHover={{ scale: 1.03 }}>
          <div>
            <CardTitle>Coloração Vip</CardTitle>
            <BenefitList>
              <li>Tudo do Básico +</li>
              <li>Chamada de vídeo 1h30 para análise</li>
              <li>Simulações de cabelo com sua cartela</li>
              <li>Estudo de looks e círculo cromático</li>
              <li>Dossiê com mais de 100 páginas</li>
              <li>30 dias de suporte via WhatsApp</li>
            </BenefitList>
          </div>
          <div>
            <Price>R$ 247,00</Price>
            <Button>Contratar Combo</Button>
          </div>
        </Card>

        <Card whileHover={{ scale: 1.03 }}>
          <div>
            <CardTitle>Coloração Premium</CardTitle>
            <BenefitList>
              <li>Tudo do Vip +</li>
              <li>Mapeamento Facial e análise visagista</li>
              <li>Consultoria para cortes, imagem e estilo</li>
              <li>De 10 a 15 simulações de corte + cor</li>
              <li>Dossiês extras de beleza e estilo</li>
              <li>Suporte estendido e recomendações personalizadas</li>
            </BenefitList>
          </div>
          <div>
            <Price>R$ 397,00</Price>
            <Button>Contratar Combo</Button>
          </div>
        </Card>
      </Grid>
    </Section>
  );
};

export default ComboColoracao;
