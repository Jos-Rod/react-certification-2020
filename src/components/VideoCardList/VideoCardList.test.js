import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCardList, { getTitle, getDescription, getVideoSrc } from './VideoCardList.component';
import mock from '../mock/youtube-videos-mock.json';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';

const channelMock = mock.items[0];
const videoMock = mock.items[1];


const setup = () => {
  render(<SiteInfoProvider><VideoCardList videoList={mock.items} /></SiteInfoProvider>);
}

const videoObjTest = [
  {
    kind: 'youtube#searchResult',
    etag: 'kiG9Z-CXE-mbZVBeom4qLurWb4w',
    id: {
      kind: 'youtube#video',
      videoId: 'ZmkslANDz0Q',
    },
    snippet: {
      publishedAt: '2019-12-18T19:22:44Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: '12 Wishes from Wizeline | Happy Holidays 2019',
      description: 'this is an example description',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-12-18T19:22:44Z',
    },
  },
];

test('Renders correctly text of list of videos', () => {
  setup();

  const containsTextOfVideo = screen.getByText(/Wizeline hace sentir a empleados como en casa/i);
  expect(containsTextOfVideo).toBeInTheDocument();
});