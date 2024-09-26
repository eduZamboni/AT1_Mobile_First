export default function Post({ image, title, text, date, author, likes, shares, comments }) {
    return (
      <div className="post">
        <img src={image} alt="Imagem da Postagem" className="post-image" />
        <h2 className="post-title">{title}</h2>
        <p className="post-text">{text}</p>
        <p className="post-info">
          Por {author} em {date}
        </p>
        <div className="post-actions">
          <span>{likes} Curtidas</span>
          <span>{shares} Compartilhamentos</span>
        </div>
        <div className="post-comments">
          <h4>Comentários</h4>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.author}</strong>: {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  