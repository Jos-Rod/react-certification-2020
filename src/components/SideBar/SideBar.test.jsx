import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar.component';
import AuthProvider from '../../providers/Auth';

const setup = () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <SideBar />
      </AuthProvider>
    </BrowserRouter>
  );
};

test('document includes search button', () => {
  setup();

  const homeLabel = screen.getByText(/Home/i);
  expect(homeLabel).toBeInTheDocument();
});

test('favourites not included, because is noth authenticated', () => {
  setup();

  const favouriteLabel = screen.queryByText(/Favourites/i);
  expect(favouriteLabel).not.toBeInTheDocument();
});

test('cross to close side bar exists', () => {
  setup();

  const homeLabel = screen.getByText(/×/i);
  expect(homeLabel).toBeInTheDocument();
});
