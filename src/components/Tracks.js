import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';

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
  animation: gradientShift 10s ease infinite;

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

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 1rem;
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


// Roadmap styling
const Roadmap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Animated arrow icon
const ArrowIcon = styled(FaArrowDown)`
  color: #00c6ff;
  font-size: 2rem;
  margin-top: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
    }
  }
`;

// Keyframes for animation
const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Milestone styling
const Milestone = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 20px;
  background: linear-gradient(135deg, #4a4a4a, #2b2b2b);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 0.5s ease forwards;
  transition: transform 0.3s ease;
  transform: translateY(50px);
  opacity: 0;

  &:nth-child(even) {
    align-self: flex-end;
  }

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

// Subtitle styling
const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

// Description styling
const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

// Project styling
const Project = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

// Tracks component
const Tracks = () => {
  const [activeTab, setActiveTab] = useState('webdev');

  const webDevMilestones = [
 { day: 'Day 1', title: 'Introduction to Web Development', description: 'Understand the basics of the web, how it works, and set up a development environment.' },
    { day: 'Day 2', title: 'HTML Basics', description: 'Learn the foundational elements of HTML, including structure, semantic tags, and common HTML tags.' },
    { day: 'Day 3', title: 'Introduction to CSS', description: 'Understand the role of CSS in styling web pages, covering syntax, selectors, and basic styling.' },
    { day: 'Day 4', title: 'Advanced CSS and Layout Techniques', description: 'Dive into advanced CSS concepts, including positioning, flexbox, responsive design, and CSS Grid.' },
    { day: 'Day 5', title: 'Introduction to JavaScript', description: 'Explore the basics of JavaScript, including syntax, data types, and simple DOM manipulation.' },
    { day: 'Day 6', title: 'JavaScript Programming Fundamentals', description: 'Delve deeper into JavaScript programming, covering control structures, functions, arrays, and events.' },
    { day: 'Day 7', title: 'Building a Simple Web Project', description: 'Apply learned concepts to build a small web project, creating a simple multi-page website with responsive design and interactivity.' }
    // Add more web development milestones as needed
  ];

  const dsaMilestones = [
    { day: 'Day 1', title: 'Introduction, Output & Data Types', description: 'Introduction to programming concepts, printing output, and understanding basic data types.'},
    { day: 'Day 2', title: 'Data Types + Reading Input', description: 'Exploring different data types and learning how to read user input.'},
    { day: 'Day 3', title: 'Operators & Conditional Statements', description: 'Understanding operators and how to use conditional statements for decision-making.'},
    { day: 'Day 4', title: 'Loops + Functions', description: 'Learning about loops for iteration and functions for code modularization.'},
    { day: 'Day 5', title: 'Arrays 1D + 2D', description: 'Working with one-dimensional and two-dimensional arrays for data storage.'},
    { day: 'Day 6', title: 'Sets & Maps', description: 'Introduction to sets and maps for storing unique values and key-value pairs.'},
    { day: 'Day 7', title: 'Problem Solving & End Of Basics', description: 'Applying learned concepts to solve problems and concluding the basics of programming.'}
    // Add more DSA milestones as needed
  ];

  const milestones = activeTab === 'webdev' ? webDevMilestones : dsaMilestones;

  useEffect(() => {
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach((milestone, index) => {
      setTimeout(() => {
        milestone.classList.add('visible');
      }, index * 500);
    });
  }, [activeTab]);

  return (
    <Container>
      <Title>Tracks</Title>
      <Description>
        We offer two main tracks: DSA and Development. Each track is designed to provide in-depth knowledge and practical experience within one month.
      </Description>
      <TabContainer>
        <TabButton active={activeTab === 'webdev'} onClick={() => setActiveTab('webdev')}>
          <span>Web Development(Basics)</span>
        </TabButton>
        <TabButton active={activeTab === 'dsa'} onClick={() => setActiveTab('dsa')}>
          <span>Data Structures & Algorithms(Basics)</span>
        </TabButton>
      </TabContainer>
      <Roadmap>
        {milestones.map((milestone, index) => (
          <Milestone key={index} className="milestone">
            <Subtitle>{milestone.day}: {milestone.title}</Subtitle>
            <Description>{milestone.description}</Description>
            <Project>{milestone.project}</Project>
            {index < milestones.length - 1 && <ArrowIcon />}
          </Milestone>
        ))}
      </Roadmap>
    </Container>
  );
};

export default Tracks;
