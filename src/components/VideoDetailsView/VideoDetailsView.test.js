import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VideoDetailsView from './VideoDetailsView.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import AuthProvider from '../../providers/Auth';

const setup = () => {
    render(<AuthProvider><SiteInfoProvider><VideoDetailsView></VideoDetailsView></SiteInfoProvider></AuthProvider>);
}

test('Related videos label exists', () => {
    setup();

    const relatedVideosLabel = screen.getByText(/Related videos/i);
    expect(relatedVideosLabel).toBeInTheDocument();
});

test('Title of video is rendered correctly', () => {
    setup();

    const titleLabel = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
    const descriptionLabel = screen.getByText(/Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, .../i);
    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
});