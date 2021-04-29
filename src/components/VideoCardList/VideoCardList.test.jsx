import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCardList from './VideoCardList.component';
import mock from '../mock/youtube-videos-mock.json';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

const setup = () => {
  render(
    <SiteInfoProvider>
      <VideoCardList videoList={mock.items} />
    </SiteInfoProvider>
  );
};

test('Renders correctly text of list of videos', () => {
  setup();

  const containsTextOfVideo = screen.getByText(
    /Wizeline hace sentir a empleados como en casa/i
  );
  expect(containsTextOfVideo).toBeInTheDocument();
});
