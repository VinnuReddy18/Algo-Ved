import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

// Keyframes for gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Container styling
const Container = styled.div`
  background: linear-gradient(135deg, #070111, #000000);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Content styling
const Content = styled(animated.div)`
  text-align: center;
  color: #fff;
  max-width: 700px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// Title styling
const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

// Description styling
const Description = styled.p`
  font-size: 1.0rem;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

// Button styling
const Button = styled.a`
  background-color: #00c6ff;
  background-image: linear-gradient(45deg, #00c6ff, #0072ff);
  color: #fff;
  padding: 0.85rem 2.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-image: linear-gradient(45deg, #0072ff, #00c6ff);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
  }
`;

// Home component
const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateX(-50px)' },
    to: { transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <Container>
      <Content style={fadeIn}>
        <animated.div style={slideIn}>
          <Title>Welcome to Algo Ved</Title>
          <Description>
            Join our 1-month boot camp to master the fundamentals of either Data Structures and Algorithms (DSA) or Development. Complete the boot camp with a project to enhance your resume and kickstart your journey as a self-taught developer.
          </Description>
          <Button href="/tracks">Explore Tracks</Button>
        </animated.div>
      </Content>
    </Container>
  );
};

export default Home;
