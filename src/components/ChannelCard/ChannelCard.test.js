import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChannelCard from './ChannelCard.component';
import mock from '../../components/mock/youtube-videos-mock.json';

const channelMock = mock.items[0];

test('title of channel', () => {
    render(<ChannelCard channel={channelMock}></ChannelCard>);

    const title = screen.getByText(/Wizeline/i);
    expect(title).toBeInTheDocument();
});