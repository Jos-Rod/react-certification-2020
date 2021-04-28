import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import mock from '../../components/mock/youtube-videos-mock.json';
import HomePage from './Home.page';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

const channelMock = mock.items[0];
const videoMock = mock.items[1];
const videosMock = [mock.items[1], mock.items[2], mock.items[3], mock.items[4]];

const setup = () => {
    render(<SiteInfoProvider><HomePage videoResults={videosMock} channelResults={[channelMock]} /></SiteInfoProvider>)
}

test('Related videos label exists', () => {
    setup();

    const videoTitle = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
    expect(videoTitle).toBeInTheDocument();
});