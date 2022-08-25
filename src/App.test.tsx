import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  test('should contains Header', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('should contains Main', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('main')).toBeInTheDocument();
  });

  test('should contains Footer', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
