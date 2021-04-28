import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import mock from '../mock/youtube-videos-mock.json';
import ChannelCardList from './ChannelCardList.component';

const channelMock = mock.items[0];
const videoMock = mock.items[1];

const setup = () => {
    render(<ChannelCardList channelList={[channelMock]}></ChannelCardList>);
}

test('Related videos label exists', () => {
    setup();

    const titleOfChannel = screen.getByText(/Wizeline/i);
    expect(titleOfChannel).toBeInTheDocument();
});