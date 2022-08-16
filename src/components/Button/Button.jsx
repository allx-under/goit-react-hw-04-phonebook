import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return <StyledBtn type="submit">Add contact</StyledBtn>;
};

export default Button;

export const StyledBtn = styled.button`
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
  width: 90px;
`;
