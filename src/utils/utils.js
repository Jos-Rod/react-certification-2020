

export function getTitle(video) {
  const aux = video.snippet.title;
  return aux != null ? aux : '';
}
export function getDescription(video) {
  const aux = video.snippet.description;
  return aux != null ? aux : '';
}
export function getVideoSrc(video) {
  const aux = video.snippet.thumbnails.high.url;
  return aux != null ? aux : '';
}

export function getVideoId(video) {
  const aux = video.id.videoId;
  return aux != null ? aux : '';
}