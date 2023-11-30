import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { Container, Logo, Nav } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <MdLocalMovies size="24" />
        </Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>
    </Container>
  );
};

export default Header;
