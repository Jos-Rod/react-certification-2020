import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import AuthProvider from '../../providers/Auth/Auth.provider';

const setup = () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <SiteInfoProvider>
          <NavBar />
        </SiteInfoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

test('document includes search button', () => {
  setup();

  const searchButton = screen.getByText(/Search/i, { selector: 'button' });
  expect(searchButton).toBeInTheDocument();
});

test('document includes text from the data provided', () => {
  setup();

  const searchPlaceholder = screen.getByPlaceholderText(/Search.../i);
  expect(searchPlaceholder).toBeInTheDocument();
});

test('document includes home button', () => {
  setup();

  const button = screen.getByText(/YouZline/i, { selector: 'button' });
  expect(button).toBeInTheDocument();
});

test('document includes text from the data provided', () => {
  setup();

  const inputSearch = screen.getByPlaceholderText('Search...');

  fireEvent.change(inputSearch, { target: { value: 'hello' } });
  expect(inputSearch.value).toBe('hello');
});

test('Navbar contains the right amount of buttons', () => {
  setup();

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(5);
});

test('Button dark mode can be clicked', () => {
  setup();

  //buttonDarkMode
  const buttonDarkMode = screen.getByTestId('buttonDarkMode');
  fireEvent.click(buttonDarkMode);
  expect(buttonDarkMode).toBeInTheDocument();
});