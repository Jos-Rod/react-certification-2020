

export function getTitle(video) {
  if (!video) return '';
  const aux = video.snippet.title;
  return aux != null ? aux : '';
}
export function getDescription(video) {
  if (!video) return '';
  const aux = video.snippet.description;
  return aux != null ? aux : '';
}
export function getVideoSrc(video) {
  if (!video) return '';
  const aux = video.snippet.thumbnails.high.url;
  return aux != null ? aux : '';
}

export function getVideoId(video) {
  if (!video) return '';
  const aux = video.id.videoId;
  return aux != null ? aux : '';
}

export function getChannelId(video) {
  if (!video) return '';
  const aux = video.id.channelId;
  return aux != null ? aux : '';
}

export function isInList(videoList, video) {
  if (videoList.length === 0 ) 
    return false;
  if (!video)
    return false;
  return videoList.filter(v => getVideoId(v) === getVideoId(video)).length > 0;
} 