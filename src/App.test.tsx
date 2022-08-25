import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('Home rendering/navigating', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(/Welcome to Space X Launches/i)
    ).toBeInTheDocument();
  });
});
