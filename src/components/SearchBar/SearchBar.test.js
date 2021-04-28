import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.component';
import SiteInfoProvider, { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { BrowserRouter } from 'react-router-dom';

const setup = () => {
    render(<BrowserRouter><SiteInfoProvider><SearchBar></SearchBar></SiteInfoProvider></BrowserRouter>);
}

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
