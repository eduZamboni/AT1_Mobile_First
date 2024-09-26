export default function Comment({ author, date, text }) {
    return (
      <div className="comment">
        <p className="comment-author">{author} - {date}</p>
        <p className="comment-text">{text}</p>
      </div>
    );
  }