import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './SearchBar.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

const setup = () => {
  render(
    <BrowserRouter>
      <SiteInfoProvider>
        <SearchBar />
      </SiteInfoProvider>
    </BrowserRouter>
  );
};

test('Message of invalid credentials not showing', () => {
  setup();

  const buttonSearch = screen.queryByText(/Search/i, { selector: 'button' });
  expect(buttonSearch).toBeInTheDocument();
});

test('Input exists and can write on it', () => {
  setup();

  const inputSearch = screen.getByPlaceholderText('Search...');

  fireEvent.change(inputSearch, { target: { value: 'hello' } });

  expect(inputSearch.value).toBe('hello');
  expect(inputSearch).toBeInTheDocument();
});
