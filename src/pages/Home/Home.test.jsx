import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './Home.page';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { channelMock, videosMock } from '../../utils/constants';

const setup = () => {
  render(
    <SiteInfoProvider>
      <HomePage videoResults={videosMock} channelResults={[channelMock]} />
    </SiteInfoProvider>
  );
};

test('Related videos label exists', () => {
  setup();

  const videoTitle = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);
  expect(videoTitle).toBeInTheDocument();
});
