import React from 'react';
import Progress from '../components/Progress';

export default {
  title: 'Progress',
  component: Progress,
};

export const ProgressBefore = () => <Progress value={30} />;

export const ProgressAfter = () => <Progress value={80} />;




