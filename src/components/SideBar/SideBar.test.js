import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar.component';
import AuthProvider, { useAuth } from '../../providers/Auth';
import { BrowserRouter } from 'react-router-dom';

const setup = () => {
    render(<BrowserRouter><AuthProvider><SideBar></SideBar></AuthProvider></BrowserRouter>);
}

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