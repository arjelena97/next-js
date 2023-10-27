import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () =>
  <Button
    label="Click me"
    primary
    onClick={() => alert('PRIMARY BUTTON CLICKED!!!')}
  />;

  export const Secondary = () =>
  <Button
    label="Click me"
    secondary
    onClick={() => alert('SECONDARY BUTTON CLICKED!!!')}
  />;