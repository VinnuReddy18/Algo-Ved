import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaDiscord} from 'react-icons/fa';


// Container styling
const Container = styled.div`
  background: linear-gradient(135deg, #000000, #000010, #000020);
  background-size: 200% 200%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  position: relative;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

// Title styling with electric shock effect
const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  color: #00f;
  background: linear-gradient(45deg, #00c6ff, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

// Subtitle styling
const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Grid styling
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Updated */
  gap: 2rem;
  justify-items: center; /* Added */
  align-items: center; /* Added */

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Updated */
  }
`;

// Card styling
const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 198, 255, 0.5);
  transition: transform 0.3s ease;
  cursor: pointer;
  animation: fadeIn 1s ease-in-out;
  display: flex; /* Added */
  flex-direction: column; /* Added */
  align-items: center; /* Added */

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
}`;

const WhatsAppCard = styled(Card)`
  background: linear-gradient(135deg, #25D366, #128C7E);
`;

const DiscordCard = styled(Card)`
  background: linear-gradient(135deg, #7289DA, #5865F2);
`;

const Community = () => {
  return (
    <Container>
      <Title>Join the Community</Title>
      <Subtitle>Connect with us on these platforms for support and networking.</Subtitle>
      <Grid>
        <WhatsAppCard onClick={() => window.open('https://chat.whatsapp.com/ByRJetxRPSU0UbfoU386cO', '_blank')}>
          <FaWhatsapp />
          <h3>WhatsApp</h3>
          <p>Join our WhatsApp group for quick updates and support.</p>
        </WhatsAppCard>
        <DiscordCard onClick={() => window.open('https://discord.gg/m72X2khu ','_blank')}>
          <FaDiscord />
          <h3>Discord</h3>
          <p>Join our Discord server for in-depth discussions and resources.</p>
        </DiscordCard>
      </Grid>
    </Container>
  );
};

export default Community;
