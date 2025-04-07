import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../index';

test('renders correctly', () => {
  const { getByText } = render(<Index />);
  expect(getByText('Edit app/index.tsx to edit this screen.')).toBeTruthy();
});