export function getTitle(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.title === 'undefined') return '';
  const aux = video.snippet.title;
  return aux != null ? aux : '';
}

export function getDescription(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.description === 'undefined') return '';
  const aux = video.snippet.description;
  return aux != null ? aux : '';
}

export function getVideoSrc(video) {
  if (!video) return '';
  if (typeof video.snippet === 'undefined') return '';
  if (typeof video.snippet.thumbnails === 'undefined') return '';
  if (typeof video.snippet.thumbnails.high === 'undefined') return '';
  if (typeof video.snippet.thumbnails.high.url === 'undefined') return '';
  const aux = video.snippet.thumbnails.high.url;
  return aux != null ? aux : '';
}

export function getVideoId(video) {
  if (!video) return '';
  if (typeof video.id === 'undefined') return '';
  if (typeof video.id.videoId === 'undefined') return '';
  const aux = video.id.videoId;
  return aux != null ? aux : '';
}

export function getChannelId(video) {
  if (!video) return '';
  if (typeof video.id === 'undefined') return '';
  if (typeof video.id.channelId === 'undefined') return '';
  const aux = video.id.channelId;
  return aux != null ? aux : '';
}

export function isInList(videoList, video) {
  if (videoList.length === 0) return false;
  if (!video) return false;
  if (video.id === '') return false;
  return videoList.filter((v) => v.id === video.id).length > 0;
}
