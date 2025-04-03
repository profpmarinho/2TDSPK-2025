import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from '../_layout';

test('renders RootLayout correctly', () => {
  const { toJSON } = render(
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
  expect(toJSON()).toMatchSnapshot();
});