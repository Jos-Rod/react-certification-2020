import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VideoDetailsFavourite from './VideoDetailsFavourite.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import AuthProvider from '../../providers/Auth';

const setup = () => {
    render(<AuthProvider><SiteInfoProvider><VideoDetailsFavourite></VideoDetailsFavourite></SiteInfoProvider></AuthProvider>);
}

test('Favourite Videos label exists', () => {
    setup();

    const relatedVideosLabel = screen.getByText(/Favourite videos/i);
    expect(relatedVideosLabel).toBeInTheDocument();
});

test('Title and description of video is rendered correctly', () => {
    setup();

    const titleLabel = screen.getByText(/We Are Wizeline/i);
    const descriptionLabel = screen.getByText(/Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and .../i);
    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
});