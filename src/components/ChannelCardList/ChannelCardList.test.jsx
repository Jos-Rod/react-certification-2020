import React from 'react';
import { render, screen } from '@testing-library/react';
import mock from '../mock/youtube-videos-mock.json';
import ChannelCardList from './ChannelCardList.component';

const channelMock = mock.items[0];

const setup = () => {
  render(<ChannelCardList channelList={[channelMock]} />);
};

test('Related videos label exists', () => {
  setup();

  const titleOfChannel = screen.getByText(/Wizeline/i);
  expect(titleOfChannel).toBeInTheDocument();
});
