import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen Interface', () => {
  it('allows the user to enter and save their name', () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    const input = getByPlaceholderText('Enter your name');
    const button = getByText('Save');

    fireEvent.changeText(input, 'Jane Doe');
    fireEvent.press(button);

    expect(getByText('Hello, Jane Doe')).toBeTruthy();
  });
});