import React from 'react';

import { StyleNavLink, Container, Item, Logo, Nav } from './Header.styled';
import { MdLocalMovies } from 'react-icons/md';
const Header = () => {
  return (
    <Nav>
      <Container>
        <Logo>
          <MdLocalMovies size="24" />
        </Logo>
        <Item>
          <StyleNavLink to="/">Home</StyleNavLink>
        </Item>
        <Item>
          <StyleNavLink to="/movies">Movies</StyleNavLink>
        </Item>
      </Container>
    </Nav>
  );
};

export default Header;
