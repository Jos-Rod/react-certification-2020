import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

test('document includes search button', () => {
    render(<SiteInfoProvider><NavBar /></SiteInfoProvider>);

    const searchButton = screen.getByText(/Search/i, { selector: 'button' });
    expect(searchButton).toBeInTheDocument();
  });

test('document includes text from the data provided', () => {
    render(<SiteInfoProvider><NavBar /></SiteInfoProvider>);
  
    const searchPlaceholder = screen.getByPlaceholderText(/Search.../i);
    expect(searchPlaceholder).toBeInTheDocument();
  });

test('document includes home button', () => {
    render(<SiteInfoProvider><NavBar /></SiteInfoProvider>);

    const button = screen.getByText(/YouZline/i, { selector: 'button' });
    expect(button).toBeInTheDocument();
  });

test('document includes text from the data provided', () => {
    render(<SiteInfoProvider><NavBar /></SiteInfoProvider>);
  
    const searchInput = screen.getByLabelText('searchInput');
    fireEvent(searchInput, { target: { value: 'hola jordan' } });
    expect(searchInput.value).toBe('hola');
  });