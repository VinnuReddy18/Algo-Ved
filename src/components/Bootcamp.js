import React, { useState, useRef } from 'react';
import styled from 'styled-components';

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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    overflow-x: auto; /* Allow horizontal scrolling on small screens if necessary */
  }
`;

const TabButton = styled.button`
  background: ${props => (props.active ? '#00c6ff' : '#333')};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 0.5rem;
  flex: 1; /* Make buttons flexible and equal width */

  &:hover {
    background: #0072ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const TrackSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative; /* Add relative positioning for the arrows */
`;

const TrackTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TrackCardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Ensure cards stay in a single row */
  overflow-x: auto; /* Allow horizontal scrolling */
  gap: 1.5rem;
  padding: 0 1rem;
  align-items: flex-start; /* Align items to the start for better consistency */
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    flex-direction: row; /* Ensure row direction on small devices */
    gap: 1rem;
  }
`;

const TrackCard = styled.div`
  background: linear-gradient(135deg, #2b2b2b, #4a4a4a);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  flex: 0 0 auto; /* Ensure cards do not shrink or grow */
  min-width: 250px; /* Minimum width for better visibility on smaller screens */

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Button = styled.a`
  background-color: #00c6ff;
  background-image: linear-gradient(45deg, #00c6ff, #0072ff);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: background-image 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover {
    background-image: linear-gradient(45deg, #0072ff, #00c6ff);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const Bootcamp = () => {
  const [activeTab, setActiveTab] = useState('webdev');
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      left: -300, // Adjust scroll amount as needed
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      left: 300, // Adjust scroll amount as needed
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Title>1-Month Fundamental Bootcamp</Title>
      <Subtitle>Join our intensive bootcamp to kickstart your learning journey. We offer live sessions and hands-on projects for each track.</Subtitle>

      <TabContainer>
        <TabButton active={activeTab === 'webdev'} onClick={() => setActiveTab('webdev')}>
          Web Development
        </TabButton>
        <TabButton active={activeTab === 'dsa'} onClick={() => setActiveTab('dsa')}>
          Data Structures & Algorithms (DSA)
        </TabButton>
      </TabContainer>

      {/* Web Development Track Section */}
      {activeTab === 'webdev' && (
        <TrackSection>
          <TrackTitle>Web Development Track</TrackTitle>
          <TrackCardContainer ref={cardContainerRef}>
            <TrackCard>
              <img src="https://via.placeholder.com/300" alt="Web Dev Lecture Image" />
              <h3>Lecture 1:TBD</h3>
              <p>Date: TBD</p>
              <p>Time: TBD</p>
              <Button href="https://zoom.us/meeting-link" target="_blank" rel="noopener noreferrer">Join Meeting</Button>
            </TrackCard>
            <TrackCard>
              <img src="https://via.placeholder.com/300" alt="Web Dev Lecture Image" />
              <h3>Lecture 2: TBD</h3>
              <p>Date: TBD</p>
              <p>Time: TBD</p>
              <Button href="https://zoom.us/meeting-link" target="_blank" rel="noopener noreferrer">Join Meeting</Button>
            </TrackCard>
            {/* Add more Web Dev track cards as needed */}
          </TrackCardContainer>
          <ArrowButton className="left" onClick={scrollLeft}>‹</ArrowButton>
          <ArrowButton className="right" onClick={scrollRight}>›</ArrowButton>
        </TrackSection>
      )}

      {/* Data Structures & Algorithms (DSA) Track Section */}
      {activeTab === 'dsa' && (
        <TrackSection>
          <TrackTitle>Data Structures & Algorithms (DSA) Track</TrackTitle>
          <TrackCardContainer ref={cardContainerRef}>
            <TrackCard>
              <img src="https://via.placeholder.com/300" alt="DSA Lecture Image" />
              <h3>Lecture 1: TBD</h3>
              <p>Date: TBD</p>
              <p>Time: TBD</p>
              <Button href="https://zoom.us/meeting-link" target="_blank" rel="noopener noreferrer">Join Meeting</Button>
            </TrackCard>
            <TrackCard>
              <img src="https://via.placeholder.com/300" alt="DSA Lecture Image" />
              <h3>Lecture 2: TBD</h3>
              <p>Date: TBD</p>
              <p>Time: TBD</p>
              <Button href="https://zoom.us/meeting-link" target="_blank" rel="noopener noreferrer">Join Meeting</Button>
            </TrackCard>
            {/* Add more DSA track cards as needed */}
          </TrackCardContainer>
          <ArrowButton className="left" onClick={scrollLeft}>‹</ArrowButton>
          <ArrowButton className="right" onClick={scrollRight}>›</ArrowButton>
        </TrackSection>
      )}
    </Container>
  );
};

export default Bootcamp;
