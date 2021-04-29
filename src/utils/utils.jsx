export function getTitle(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.title === 'undefined') return '';
  return video.snippet.title;
}

export function getDescription(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.description === 'undefined') return '';
  return video.snippet.description;
}

export function getVideoSrc(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.thumbnails === 'undefined') return '';
  if (typeof video.snippet.thumbnails.high === 'undefined') return '';
  if (typeof video.snippet.thumbnails.high.url === 'undefined') return '';
  return video.snippet.thumbnails.high.url;
}

export function getVideoId(video) {
  if (!video) return '';
  if (typeof video.id === 'undefined') return '';
  if (typeof video.id.videoId === 'undefined') return '';
  return video.id.videoId;
}

export function getChannelId(video) {
  if (!video) return '';
  if (typeof video.id === 'undefined') return '';
  if (typeof video.id.channelId === 'undefined') return '';
  return video.id.channelId;
}

export function isInList(videoList, video) {
  if (videoList.length === 0) return false;
  if (!video) return false;
  if (video.id === '') return false;
  return videoList.filter((v) => v.id === video.id).length > 0;
}
