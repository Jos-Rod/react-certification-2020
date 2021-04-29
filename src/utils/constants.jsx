import mock from '../components/mock/youtube-videos-mock.json';

const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const API_KEY = 'AIzaSyCaH4y8uyNwvD5DjAcrhsh3r_vHJqmdUkw'; // AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA || AIzaSyCaH4y8uyNwvD5DjAcrhsh3r_vHJqmdUkw
const BASE_URL_YT_SEARCH = 'https://www.googleapis.com/youtube/v3/search';
const BASE_URL_YT_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
const CURRENT_USER = 'CURRENT_USER';
const VIDEO_FAVOURITES = 'VIDEO_FAVOURITES';

export { AUTH_STORAGE_KEY, API_KEY, BASE_URL_YT_SEARCH, CURRENT_USER, VIDEO_FAVOURITES, BASE_URL_YT_VIDEOS };

export const videoSelectedMock = mock.items[1];
export const channelMock = mock.items[0];
export const videosMock = [mock.items[1], mock.items[2], mock.items[3], mock.items[4]];
