import React from 'react';
import { render, screen } from '@testing-library/react';
import ChannelCard from './ChannelCard.component';
import mock from '../mock/youtube-videos-mock.json';

const channelMock = mock.items[0];

test('title of channel', () => {
  render(<ChannelCard channel={channelMock} />);

  const title = screen.getByText(/Wizeline/i);
  expect(title).toBeInTheDocument();
});
