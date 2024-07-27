import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    background: #000001;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-family: 'Montserrat', sans-serif;
    position: sticky; /* Stick navbar to top */
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #333; /* Add grey line at the bottom */

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
    }
`;

const Logo = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
    position: relative;
    display: inline-block;
    padding: 0.5rem;
    text-transform: uppercase;
    background: linear-gradient(45deg, #00c6ff, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0, 198, 255, 0.6), 0 0 20px rgba(0, 198, 255, 0.6);
    animation: neon 1.5s ease-in-out infinite alternate;

    @keyframes neon {
        0% {
            text-shadow: 0 0 10px rgba(0, 198, 255, 0.6), 0 0 20px rgba(0, 198, 255, 0.6);
        }
        100% {
            text-shadow: 0 0 20px rgba(0, 198, 255, 0.8), 0 0 30px rgba(0, 198, 255, 0.8);
        }
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 4rem;
        left: 0;
        background: #000;
        padding: 1rem 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
`;

const NavLink = styled(Link)`
    position: relative;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #ccc;
        transform: translateY(-2px);
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #00c6ff;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;

const MenuToggle = styled.div`
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <NavbarContainer>
            <div className="container mx-auto flex justify-between items-center">
                <Logo>Algo Ved</Logo>
                <MenuToggle onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </MenuToggle>
                <NavLinks isOpen={isOpen}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tracks">Tracks</NavLink>
                    <NavLink to="/bootcamp">Bootcamp</NavLink>
                    <NavLink to="/careers">Community</NavLink>
                </NavLinks>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
