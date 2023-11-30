import Header from 'components/Header/Header';
import { Container } from 'components/Layout/Layout.styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
