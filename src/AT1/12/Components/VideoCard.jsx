export default function VideoCard({ thumbnail, title, author }) {
    return (
      <div className="video-card">
        <img src={thumbnail} alt={title} className="video-thumbnail" />
        <div className="video-info">
          <p className="video-card-title">{title}</p>
          <p className="video-card-author">{author}</p>
        </div>
      </div>
    );
  }