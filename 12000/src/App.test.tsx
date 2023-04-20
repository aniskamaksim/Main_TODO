import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWithRedux from "./AppWithRedux";
import App from './AppWithRedux';

test('renders learn react link', () => {
  render(<AppWithRedux />);
  const linkElement = screen.getByText(/create your first todolist/i);
  expect(linkElement).toBeInTheDocument();
});
