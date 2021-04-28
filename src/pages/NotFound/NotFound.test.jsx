import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

test('home button on not found page', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );

  const title = screen.getByText(/Go back home/i, { selector: 'button' });
  expect(title).toBeInTheDocument();
});
