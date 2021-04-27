import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFoundPage from './NotFound.page';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

test('home button on not found page', () => {
    render(<BrowserRouter><NotFoundPage></NotFoundPage></BrowserRouter>);

    const title = screen.getByText(/Go back home/i, { selector: 'button' });
    expect(title).toBeInTheDocument();
});