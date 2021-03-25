import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCardList, { getTitle, getDescription, getVideoSrc } from './VideoCardList.component';

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

test('function to get title from data returns correct property value', () => {
  const result = getTitle(videoObjTest[0]);
  expect(result).toBe('12 Wishes from Wizeline | Happy Holidays 2019');
});

test('function to get description from data returns correct property value', () => {
  const result = getDescription(videoObjTest[0]);
  expect(result).toContain('this is an example description');
});

test('function to get video source from data returns correct property value', () => {
  const result = getVideoSrc(videoObjTest[0]);
  expect(result).toBe('https://i.ytimg.com/vi/ZmkslANDz0Q/hqdefault.jpg');
});

test('document includes text from the provided data', () => {
  render(<VideoCardList />);

  const search = screen.getByText(/Our vibrant Mexico City office is home to agile/i);
  expect(search).toBeInTheDocument();
});
