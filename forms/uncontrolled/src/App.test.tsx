import React from 'react';
import { render, screen } from '@testing-library/react';
import UncontrolledApp from "./UncontrolledApp";
//import App from './App';

test('renders learn react link', () => {
  render(<UncontrolledApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
