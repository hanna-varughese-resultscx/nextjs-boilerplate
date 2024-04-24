import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home component', () => {
  test('renders heading, Get Started, and Documentation buttons', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Documentation/i })).toBeInTheDocument();
  });
});
