import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', 'and displays the initial state', () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    expect(getByPlaceholderText('Enter your name')).toBeTruthy();
    expect(getByText('Save')).toBeTruthy();
  });

  it('saves and displays the entered name', () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    const input = getByPlaceholderText('Enter your name');
    const button = getByText('Save');

    fireEvent.changeText(input, 'John Doe');
    fireEvent.press(button);

    expect(getByText('Hello, John Doe')).toBeTruthy();
  });
});