import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders learn react link', () => {
  render(<Button>点击</Button>);
  const linkElement = screen.getByText(/点击/i);
  expect(linkElement).toBeInTheDocument();
});
