import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledBtn = styled.button`
  display: inline-block;
  text-align: center;
  max-height: 28px;
  /* max-width: 100px; */
  padding: 6px;
  margin-right: auto;
  font-size: 14px;
  color: #3f3f3f;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    color: navy;
    border-color: navy;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  color: black;
  &.active {
    color: orangered;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;
