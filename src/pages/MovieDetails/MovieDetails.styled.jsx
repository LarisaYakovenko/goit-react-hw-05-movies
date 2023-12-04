import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  color: #160101;
  width: 100px;
  height: 20px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: 48px;
  height: 48px;
  padding: 10px 20px;
  font: inherit;
  font-weight: 600;
  font-size: 28px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: #b04242;
  }
`;
export const Container = styled.div`
  max-width: 1200px;

  padding: 50px;
  height: 100vh;
`;

export const MovieBlok = styled.div`
  display: flex;
`;

export const InfoMovie = styled.div`
  padding: 50px;
`;

export const Img = styled.img`
  height: 100%;
  padding: 20px;
`;

export const Li = styled(Link)`
  color: #160101;
  width: 100px;
  height: 20px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: 48px;
  height: 48px;
  padding: 10px 20px;
  font: inherit;
  font-weight: 600;
  font-size: 28px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: #b04242;
  }
`;
