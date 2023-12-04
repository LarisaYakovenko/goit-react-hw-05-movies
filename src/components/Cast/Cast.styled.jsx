import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 20px;
`;
export const Li = styled.li`
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: none;
  background-color: #f8f1f1;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
  list-style: none;
  margin: 0;
`;
export const P = styled.p`
  font-size: 20px;
  font-weight: 600px;
`;
