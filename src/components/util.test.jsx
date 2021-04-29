import mock from './mock/youtube-videos-mock.json';
import {
  getChannelId,
  getDescription,
  getTitle,
  getVideoId,
  getVideoSrc,
  isInList,
} from '../utils/utils';
import { random } from '../utils/fns';
import { storage } from '../utils/storage';

const channelMock = mock.items[0];
const videoMock = mock.items[1];
const videoMock2 = {
  kind: 'youtube#searchResult',
  etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
  id: {
    kind: 'youtube#video',
    videoId: 'not the correct id',
  },
  snippet: {
    publishedAt: '2019-09-30T23:54:32Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'none',
    publishTime: '2019-09-30T23:54:32Z',
  },
};

test('function gets channel id correctly, and managing errors', () => {
  const result = getChannelId(channelMock);
  const resultFailingEmpty = getChannelId();
  const resultFailing = getChannelId();

  expect(result).toBe('UCPGzT4wecuWM0BH9mPiulXg');
  expect(resultFailingEmpty).toBe('');
  expect(resultFailing).toBe('');
});

test('function gets channel title, and managing errors', () => {
  const result = getTitle(channelMock);
  const resultFailingEmpty = getTitle();
  const resultFailing = getTitle();

  expect(result).toBe('Wizeline');
  expect(resultFailingEmpty).toBe('');
  expect(resultFailing).toBe('');
});

test('function gets description correctly, and managing errors', () => {
  const result = getDescription(videoMock);
  const resultFailingEmpty = getDescription();
  const resultFailing = getDescription();

  expect(result).toContain('Follow Hector Padilla, Wizeline Director of Engineering');
  expect(resultFailingEmpty).toBe('');
  expect(resultFailing).toBe('');
});

test('function gets video source, and managing errors', () => {
  const result = getVideoSrc(videoMock);
  const resultFailingEmpty = getVideoSrc();
  const resultFailing = getVideoSrc();

  expect(result).toContain('https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg');
  expect(resultFailingEmpty).toBe('');
  expect(resultFailing).toBe('');
});

test('function returns false when empty array', () => {
  const result = isInList([], '');

  expect(result).toBe(false);
});

test('function returns false when video is null', () => {
  const result = isInList(['hello '], null);

  expect(result).toBe(false);
});

test('function returns false when item proportioned is not type video', () => {
  const result = isInList(mock.items, 'world');

  expect(result).toBe(false);
});

test('function returns true when parameters proportioned correctly', () => {
  const result = isInList(mock.items, videoMock);

  expect(result).toBe(true);
});

test('function returns false when video is not on list', () => {
  const result = isInList(mock.items, videoMock2);

  expect(result).toBe(false);
});

test('function returns false when video id is ``', () => {
  const result = isInList(mock.items, { id: '' });

  expect(result).toBe(false);
});

test('function random works', () => {
  const result = random(5);
  let res = false;

  if (result >= 0 && res <= 5) res = true;

  expect(res).toBe(true);
});

// testing storage
test('storage functionality works, happy path', () => {
  storage.set('KEY_EX', 'wow');
  const wow = storage.get('KEY_EX');

  expect(wow).toBe('wow');
});

test('storage functionality when storage key doesn`t exists', () => {
  // storage.set('KEY_EX', 'wow');
  const wow = storage.get('KEY_EX2');

  expect(wow).toBe(null);
});

// testing functions to get data from videos, get video id
test('function getVideoId returns `` when no video is presented', () => {
  const result = getVideoId();

  expect(result).toBe('');
});

test('function getVideoId returns `` when snippet attribute doesn`t exist', () => {
  const result = getVideoId({ wow: "example" });

  expect(result).toBe('');
});

test('function getVideoId returns `` when videoId attribute doesn`t exist', () => {
  const result = getVideoId({ id: { wow: 'example' } });

  expect(result).toBe('');
});

test('function getVideoId returns `` when videoId attribute doesn`t exist', () => {
  const result = getVideoId({ id: { videoId: 'example' } });

  expect(result).toBe('example');
});

// testing functions to get data from videos, get video source
test('function getVideoSrc returns `` when no video is presented', () => {
  const result = getVideoSrc();

  expect(result).toBe('');
});

test('function getVideoSrc returns `` when snippet attribute doesn`t exist', () => {
  const result = getVideoSrc({ wow: "example" });

  expect(result).toBe('');
});

test('function getVideoSrc returns `` when thumbnails attribute doesn`t exist', () => {
  const result = getVideoSrc({ snippet: { wow: "example" } });

  expect(result).toBe('');
});

test('function getVideoSrc returns `` when high attribute doesn`t exist', () => {
  const result = getVideoSrc({ snippet: { thumbnails: { wow: "example" } } });

  expect(result).toBe('');
});


test('function getVideoSrc returns `` when url attribute doesn`t exist', () => {
  const result = getVideoSrc({ snippet: { thumbnails: { high: { wow: "example" } } } });

  expect(result).toBe('');
});

test('function getVideoSrc returns correct video source', () => {
  const result = getVideoSrc({ snippet: { thumbnails: { high: { url: "example" } } } });

  expect(result).toBe('example');
});

// testing functions to get data from videos, getChannelId
test('function getChannelId returns `` when no video is presented', () => {
  const result = getChannelId();

  expect(result).toBe('');
});

test('function getChannelId returns `` when id attribute doesn`t exist', () => {
  const result = getChannelId({ wow: "example" });

  expect(result).toBe('');
});

test('function getChannelId returns `` when videoId attribute doesn`t exist', () => {
  const result = getChannelId({ id: { wow: 'example' } });

  expect(result).toBe('');
});

test('function getChannelId returns correct channel id', () => {
  const result = getChannelId({ id: { channelId: 'example' } });

  expect(result).toBe('example');
});

// testing functions to get data from videos, getDescription
test('function getDescription returns `` when no video is presented', () => {
  const result = getDescription();

  expect(result).toBe('');
});

test('function getDescription returns `` when snippet attribute doesn`t exist', () => {
  const result = getDescription({ wow: "example" });

  expect(result).toBe('');
});

test('function getDescription returns `` when description attribute doesn`t exist', () => {
  const result = getDescription({ snippet: { wow: 'example' } });

  expect(result).toBe('');
});

test('function getDescription returns correct channel id', () => {
  const result = getDescription({ snippet: { description: 'example' } });

  expect(result).toBe('example');
});

// testing functions to get data from videos, getTitle
test('function getTitle returns `` when no video is presented', () => {
  const result = getTitle();

  expect(result).toBe('');
});

test('function getTitle returns `` when snippet attribute doesn`t exist', () => {
  const result = getTitle({ wow: "example" });

  expect(result).toBe('');
});

test('function getTitle returns `` when title attribute doesn`t exist', () => {
  const result = getTitle({ snippet: { wow: 'example' } });

  expect(result).toBe('');
});

test('function getTitle returns correct title', () => {
  const result = getTitle({ snippet: { title: 'example' } });

  expect(result).toBe('example');
});