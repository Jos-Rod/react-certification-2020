import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import mock from '../mock/youtube-videos-mock.json';

const videoMock = mock.items[1];

const setup = () => {
  render(
    <SiteInfoProvider>
      <VideoCard video={videoMock} isFromFav={true} />
    </SiteInfoProvider>
  );
};

describe('VideoCard component displays correctly properties', () => {
  test('title property correctly displayed', () => {
    setup();
    const title = screen.getByText(/Video Tour | Welcome to Wizeline Guadalajara/i);

    expect(title).toBeInTheDocument();
  });

  test('description property correctly displayed', () => {
    setup();
    const description = screen.getByText(
      /Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, .../i
    );
    expect(description).toBeInTheDocument();
  });
});
