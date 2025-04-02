import React from 'react';
import { render } from '@testing-library/react-native';
import RootLayout from '../_layout';

test('renders RootLayout correctly', () => {
  const { toJSON } = render(<RootLayout />);
  expect(toJSON()).toMatchSnapshot();
});