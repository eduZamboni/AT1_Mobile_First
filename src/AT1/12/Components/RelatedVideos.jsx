import VideoCard from './VideoCard';

export default function RelatedVideos() {
  const videos = [
    { id: 1, thumbnail: 'https://via.placeholder.com/150', title: 'Como é feito um CARTÃO de CRÉDITO #Boravê', author: 'Manual do Mundo' },
    { id: 2, thumbnail: 'https://via.placeholder.com/150', title: 'Como é FEITO o SALGADINHO? #Boravê', author: 'Manual do Mundo' },
  ];

  return (
    <section className="related-videos">
      <h2>Vídeos Relacionados</h2>
      <div className="video-list">
        {videos.map(video => (
          <VideoCard key={video.id} thumbnail={video.thumbnail} title={video.title} author={video.author} />
        ))}
      </div>
    </section>
  );
}