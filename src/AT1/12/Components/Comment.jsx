export default function Comment({ name, date, text }) {
    return (
      <div className="comment">
        <p className="comment-author"><strong>{name}</strong> - {date}</p>
        <p className="comment-text">{text}</p>
      </div>
    );
  }