import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: red;
`;
export const Container = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Logo = styled.li`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  color: #fafafa;




`;
export const Nav = styled.div`

  /* color:white; */
  background-color: #b04242;

  color: #fafafa;
`;

export const StyleNavLink = styled(NavLink)`
  display: flex;
  color: #fafafa;
  font-weight: 600;
  gap: 20px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;


  &.active {
    color: #111;
    text-decoration: underline;
  }





`;
export const Item = styled.li`
  color: #fafafa;
  width: 60px;

`
