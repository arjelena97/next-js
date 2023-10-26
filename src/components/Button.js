import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${props => props.primary 
    ? css`
    background-color: #007bff;
    color: #fff;
      &:hover {
        background-color: #0056b3;
      }
    ` 
    : css`      
    background-color: #eee;
    color: #333;
      &:hover {
        background-color: #bdbfbe;
      }
    `
  }  
`;

const Button = ({ label, primary, secondary }) => {
  return <StyledButton primary={primary} secondary={secondary}>{label}</StyledButton>;
};

export default Button;