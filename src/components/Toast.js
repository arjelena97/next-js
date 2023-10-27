import React from 'react';
import styled from 'styled-components';
import Slide from '@mui/material/Slide';

const ToastContainer = styled.div`
  background-color: ${props => (props.type === 'success' ? '#28a745' : '#dc3545')}e8;
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 5px 20px 5px 20px;
  color: #fff;
  display: block;
  z-index: 999;
`;

const Toast = ({ message, type, title }) => {
  return (
    <Slide direction="down" in={open}>
    <ToastContainer className="toast" type={type}>
      <h3>{title}</h3>
      <p>{message}</p>
    </ToastContainer>
    </Slide>
  )
};

export default Toast;