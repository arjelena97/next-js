import React from 'react';
import Toast from '../components/Toast';

export default {
  title: 'Toast',
  component: Toast,
};

export const Success = () => <Toast title="Success" message="You have successfully access this page." type="success" />;

export const Error = () => <Toast title="Error" message="You have some error!" />;