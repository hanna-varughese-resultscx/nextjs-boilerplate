import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

test('renders Home page with text and buttons', async () => {
  render(<Home />);
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Test "Get Started" button
  const getStartedButton = screen.getByRole('link', { name: /Get Started/i });
  expect(getStartedButton).toBeInTheDocument();
  expect(getStartedButton).toHaveAttribute('href', '/get-started');

  // Test "Documentation" button
  const documentationButton = screen.getByRole('link', { name: /Documentation/i });
  expect(documentationButton).toBeInTheDocument();
  expect(documentationButton).toHaveAttribute('href', '/documentation');
});
